import React from 'react'

import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import styles from './Card.module.css'


const Cards = ({ title, likes, order, image }) => {

  return (

    <div className={styles.header}>










      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
        <h1 className={styles.text}>{` ${title}`}</h1>
        <div className='flex mt-16 ml-2 justify-items-center'>
          <div
            className={classNames([styles.dangerBadge, styles.badgeAnime])}
          >
            <AiFillHeart />
          </div>
          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
              "group",
            ])}
          >
            <BsChatSquareFill />
            <span
              className={classNames([styles.counter, "group-hover:text-white"])}
            >
              {likes}
            </span>
          </div>
          <button className="outline-none border-1 border-white ml-32 btn bg-transparent btn-sm text-white mx-2 bottom-0">
            Order now
          </button>
        </div>



      </div>
      <img src={image} className={styles.image} alt="" />
    </div>


  )
}

export default Cards