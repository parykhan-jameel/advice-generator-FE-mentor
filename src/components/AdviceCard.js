import React from 'react'
import desktopDivider from '../images/pattern-divider-desktop.svg'
import iconDice from '../images/icon-dice.svg'
import mobileDivider from '../images/pattern-divider-mobile.svg'

export const AdviceCard = ({getAdvice,advice}) => {
  //const [data, setData] = useState({
  //  id: "",
  //  advice: ""
  //});
  //useEffect(()=>{
  //  fetch('https://api.adviceslip.com/advice').then(res => res.json()).then((data) =>setData({
  //    id: data.slip.id,
  //    advice: data.slip.advice,
//
  //  }) ) 
  //},[]);
   
   
  if (!advice?.slip) {
    return null;
  }

  return (
   <main className='flex min-h-screen flex-col items-center justify-center  bg-[#1f2631] font-MN'>
    <div className='flex flex-col justify-center content-center p-10   items-center w-1/2 sm:w-96  rounded-md bg-[color:hsl(217,19%,24%)]  '>
      <p className='text-[hsl(150,100%,66%)] text-xs tracking-widest' style={{fontWeight: 'bold'}}>ADVICE # {advice.slip.id}</p>
      <div>
        <h2 className='m-5 text-center font-bold text-[hsl(193,38%,86%)] text-3xl sm:text-2xl'>{`"${advice.slip.advice}"`}</h2>
        <div>
          <picture>
           <source media='(max-width: 640px)' srcSet={mobileDivider} />
           <source media='(min-width: 640px)' srcSet={desktopDivider} />
           <img src={desktopDivider} alt='divider' className='mt-4'></img>
          </picture>
        </div>
      </div>
      <div className='flex items-center justify-center relative top-16 sm:top-14 w-14 h-14 sm:w-10 sm:h-10 bg-[hsl(150,100%,66%)] rounded-full hover:cursor-pointer  hover:shadow-3xl'>
        <img onClick={getAdvice} src={iconDice} className=' h-6 w-6 sm:h-4 sm:w-4'></img>
      </div>
     
    </div>
   </main>
  )
}
