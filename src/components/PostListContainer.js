
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getPostsList } from '../redux/posts/action';
import {connect} from "react-redux";
import PostCard from './PostCard';

 function PostListContainer(props) {
    const {postList, getPostsList} = props;
    const [start, setStart] = useState(0);

    const observer = useRef();
    const lastPostRef = useCallback(node => {
        if(observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                setStart(prevStart => prevStart + 10)
            }
        })
        if(node) observer.current.observe(node)
    },[])

    useEffect(() => {
        getPostsList(start);
    },[start]);


    return (
        <div>
            {
                postList.map((card,index) =>{
                    if(postList.length === index + 1){
                        return <div>
                            <PostCard card={card} innerRef={lastPostRef} key={card.id}/>
                        </div>
                    }else {
                        return <PostCard card={card}/>
                    }
                })
            }
        </div>
    );
  }

const mapStateToProps = (state) => ({
    postList: state.postList.postsList,
})

const mapDispatchToProps = dispatch => ({
    getPostsList: (start) => dispatch(getPostsList(start)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
