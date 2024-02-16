import {useRef, useState} from "react";
import {ArrowDownCircle, ArrowLeft, ArrowRight, ArrowRotateCW, IconLayout, Link, Lock, Plus} from "../../icons.jsx";
import PropTypes from "prop-types";

const Header = ({tabs, setTabs, activeTab}) => {
    const searchInputRef = useRef()
    const [focus, setFocus] = useState(false)
    let tabData = {};
    tabs.forEach(tab => {
        if (tab.id === activeTab){
            tabData = tab
        }
    })

    const keyDownHandle = (event) => {
        if (event.key === "Enter"){
            let newState = [];
            tabs.forEach((tab, index) => {
                if (tab.id === activeTab){
                    newState[index] = {
                        ...tab,
                        url: event.target.value
                    }
                } else {
                    newState[index] = tab
                }
            })
            setTabs(newState)
            searchInputRef.current.blur();
        }
    }

    return (
        <div className="relative">
            <div className="w-3 h-3 rounded-lg bg-zinc-400 top-[7px] left-[7px] absolute"></div>
            <div className="w-3 h-3 rounded-lg bg-zinc-400 top-[7px] left-[27px] absolute"></div>
            <div className="w-3 h-3 rounded-lg bg-zinc-400 top-[7px] left-[47px] absolute"></div>
            <div className="bg-transparent pt-0.5 pb-1.5 pl-[70px] pr-[9px] flex items-center justify-between">
                <div className="flex items-center justify-start gap-1">
                    <button
                        className="text-tool-bar-item hover:bg-zinc-300 p-1.5 rounded-md transition duration-300">
                        <IconLayout size={16}/>
                    </button>
                    <button
                        className="text-tool-bar-item hover:bg-zinc-300 p-1.5 rounded-md transition duration-300">
                        <ArrowLeft size={16}/>
                    </button>
                    <button
                        className="text-tool-bar-item hover:bg-zinc-300 p-1.5 rounded-md transition duration-300">
                        <ArrowRight size={16}/>
                    </button>
                    <button
                        className="text-tool-bar-item hover:bg-zinc-300 p-1.5 rounded-md transition duration-300">
                        <ArrowRotateCW size={16}/>
                    </button>
                </div>
                <div>
                    <div className={`bg-search-bar-bg rounded-md w-80 p-1 flex items-center justify-center border ${ focus ? "border-zinc-400/50" : "border-transparent"}`}>
                        <button
                            className="text-zinc-800 px-1 hover:bg-zinc-400/30 py-1 rounded-md transition duration-300">
                            <Lock size={13}/>
                        </button>
                        <input type="text"
                               onKeyDown={keyDownHandle}
                               onFocus={() => setFocus(true)}
                               onBlur={() => setFocus(false)}
                               ref={searchInputRef}
                               className="flex-1 bg-transparent focus:outline-none text-center text-zinc-800 text-sm focus:placeholder-transparent"
                               placeholder="Search or sign URL"
                               defaultValue={tabData.url}/>
                        <button
                            className="text-zinc-800 px-1 hover:bg-zinc-400/50 py-1 rounded-md transition duration-300">
                            <Link size={13}/>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-1">
                    <button
                        className="text-tool-bar-item hover:bg-zinc-300 p-1.5 rounded-md transition duration-300">
                        <ArrowDownCircle size={16}/>
                    </button>
                    <button
                        className="text-tool-bar-item hover:bg-zinc-300 p-1.5 rounded-md transition duration-300">
                        <Plus size={16}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    tabs: PropTypes.array.isRequired,
    setTabs: PropTypes.func.isRequired,
    activeTab: PropTypes.string.isRequired
}

export default Header