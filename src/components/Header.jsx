import React, {useState, useEffect} from 'react'

function Header() {

    const [theme, setTheme] = useState("light")
    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
            setToggle(true)
            
        }else{
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
            setToggle(false)
        }
    },[theme])
    const handleToggleTheme =()=>{
        setTheme(theme === "dark" ? "light": "dark")
    }

  return (
    <>
        <header className='flex items-center  flex-wrap justify-between'>
            <div>
                <h1 className='font-bold text-2xl mb-1 text-slate-800 dark:text-slate-200'>Social Media Manager</h1>
                <p className="text-slate-600 font-bold dark:text-slate-400">Total Followers: 23,0004</p>
            </div>
            <div className="toggle" >
                <label
                    htmlFor="checkbox"
                    className="font-bold text-slate-600 dark:text-slate-200 text-sm cursor-pointer"
                >
                    Dark Mode
                </label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={toggle}
                        onChange={handleToggleTheme}
                        
                        

                    />
                <label htmlFor="checkbox" className="label">
                    <div className="ball"></div>
                </label>
        </div>

        </header>
    </>
  )
}

export default Header