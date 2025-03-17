import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';




export function Post({author, publishedAt, content}){
    const [comments,setComments] = useState([
        'Post muito legal'  
    ]);

    const [newCommentText, setNewComentText] = useState('')

    const publishedDataFormatted = format(publishedAt, "d 'de' LLLL  'às' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR, 
        addSuffix: true,
    });

    function handleCreateNeComment(){
        event.preventDefault();

        setComments([...comments, newCommentText ])   
        setNewComentText('')   
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('') 
        setNewComentText(event.target.value);
    };

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Este Campo é obrigatório!')   
    }


    function deleteComment(commentToDelete) {
        const commetsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

       setComments(commetsWithoutDeletedOne);
    };

    const isNewCommentEmpty = newCommentText.length === 0 
   
    return (
        <article className={styles.Post}>
            <header>
                <div className= {styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className = {styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>    
                </div>

                <time title={publishedDataFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>    
                
                    {content.map(line =>{  
                        if(line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        }else if(line.type ==='link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                        }
                     )}               
            </div>

            <form onSubmit={handleCreateNeComment} className={styles.commentForm}>
                
                <strong>Deixe seu Feedback</strong>
                
                <textarea
                name="comment"
                placeholder="Deixe um comentário" 
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />

                
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    );
}