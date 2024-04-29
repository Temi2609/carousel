import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Carousel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fontawesome/free-solid-svg-icons'
import { ImageCollections } from './ImageCollection';




const CarouselPage = () => {
  const [currentIndex, setCurrentIndex]= useState(0)
     let timeout ;
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      const nextIndex = (currentIndex + 1) % ImageCollections.length
      setCurrentIndex(nextIndex)
    },4000)

    return()=> clearTimeout(timeout)
    
    

    },[currentIndex])

    const handleNext = ()=>{
      clearTimeout(timeout)
      const nextIndex = (currentIndex + 1) % ImageCollections.length
      setCurrentIndex(nextIndex)

      timeout = setTimeout(()=>{
        const nextIndex = (currentIndex +1) % ImageCollections.length
        setCurrentIndex(nextIndex)

      },4000)
    }
    const handlePrevious = ()=>{
      clearTimeout(timeout)
      const prevIndex = currentIndex === 0 ? ImageCollections.length - 1: currentIndex - 1
      setCurrentIndex(prevIndex)
      
      timeout = setTimeout(()=>{
        const nextIndex = (currentIndex +1) % ImageCollections.length
        setCurrentIndex(nextIndex)

      },4000)
    }
    return(
      <>
        <div className={styles.carousel}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src= {ImageCollections[currentIndex]} alt="image" />

              <div className={styles.textContainer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <button className={styles.arrow} onClick={handlePrevious} aria-label='prev'>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.arrowIcon}/>
            </button>
            <button className={styles.arrow} onClick={handleNext} aria-label='Next'>
                <FontAwesomeIcon icon={faChevronRight} className={styles.arrowIcon}/>
            </button>
        </div>
      </>
  ) 
  }



    
  export default CarouselPage