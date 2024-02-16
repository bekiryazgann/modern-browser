import Header from "../Header/index.jsx";

export default function Layout({ children }){
    return (
        <div className="bg-zinc-200 p-1 h-[calc(100vh)] overflow-hidden">
            <Header/>
            <div className="p-2 pt-0 h-[calc(100%-32px)] overflow-hidden">
                <div className="bg-white h-full rounded-lg overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    )
}