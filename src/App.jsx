import Header from "./components/Header/index.jsx";
import { useEffect, useState } from "react";
import WebView from "./components/WebView/index.jsx";

function App() {
    const [tabs, setTabs] = useState([
        {
            id: "579774f4-4202-4503-a19a-9668549b3c4d",
            url: "https://netist.net",
            active: true
        }
    ]);
    const [activeTab, setActiveTab] = useState("579774f4-4202-4503-a19a-9668549b3c4d");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [tabs]);

    return (
        <div className="p-1 h-[calc(100vh)] overflow-hidden border-2"
             style={{
                 background: 'linear-gradient(270deg, #F1F0E2 30%, #E0E2F6 98%)'
             }}>
            <Header tabs={tabs} setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="p-2 pt-0 h-[calc(100%-40px)] relative">
                <div className="bg-white h-full rounded-lg overflow-hidden drop-shadow-lg">
                    <WebView key={activeTab}
                             data-key={activeTab}
                             src={tabs.find(tab => tab.id === activeTab)?.url}
                             className={`${loading ? "opacity-0" : "opacity-1"} w-full h-full transition duration-500`} />
                    {loading && (
                        <div className="absolute bottom-0 w-full text-center pb-4">
                            <span className="inline-block bg-white p-2 rounded-md shadow-md transform translate-y-full">
                                Yükleniyor
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;