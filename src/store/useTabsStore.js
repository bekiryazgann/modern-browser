import {create} from 'zustand'
import { v4 as uuidv4 } from 'uuid';

export const useTabsStore = create((set) => ({
    tabs: [
        {
            id: "579774f4-4202-4503-a19a-9668549b3c4d",
            url: "https://netist.net",
            active: true
        }
    ],
    activeTab: "579774f4-4202-4503-a19a-9668549b3c4d",
    searchActiveTab: (url) => {
        return set((state) => {
            let newState = [];
            state.tabs.forEach((tab, index) => {
                if (tab.id === state.activeTab){
                    newState[index] = {
                        ...tab,
                        id: uuidv4(),
                        url
                    }
                } else {
                    newState[index] = tab
                }
            })
            console.log(newState)
            return newState
        })
    }
}))