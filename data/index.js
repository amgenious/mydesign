import { biblestudies, familyweek, freshersservice, freshersweek, friendsday, prayermeeting, sundaybiblestudies, tazie, youth } from "@/images"

const navlinks = [
    {
        id:'1',
        name:'All',
        url:'/'
    },
    {
        id:'5',
        name:'Sunday Services',
        url:'/sundayservice'
    },
    {
        id:'11',
        name:'Week Meetings',
        url:'/weekmeetings'
    },
    {
        id:'12',
        name:'Other Programs',
        url:'/weekcelebrations'
    },
]
const designs =[
    {
        id:'1',
        name:'Freshers Service',
        category:'sundayservice',
        image:freshersservice,
        psd:"https://mega.nz/file/FK8hEZwI#nNzHF09mwyJ38hvUPu8Kcjq5ADuamxs9qaT8URpLM_o"
    },
    {
        id:'2',
        name:"Bible Studies",
        category:'weekmeetings',
        image:biblestudies,
        psd:'https://mega.nz/file/RTsAVQjD#LrojQ-CS6RHjD2LjS3z2qVeCflUsupvhYFGM53pWWbA'
    },
    {
        id:'3',
        name:"Fresher Week",
        category:"weekcelebrations",
        image:freshersweek,
        psd:'https://mega.nz/file/8HUBFQaY#AnPmuI_BtF4l-YaWnQv-agunjafTOeGfnPmTi3AVS48'
    },
    {
        id:"4",
        name:"Friendsday",
        category:"sundayservice",
        image:friendsday,
        psd:'https://mega.nz/file/Nfs3EIYR#4XpQfWKVFoqptmIHxrTIsHIgi2uI2t7jx5rqB9wEqwM'
    },
    {
        id:"5",
        name:'Prayer Meeting',
        category:"weekmeetings",
        image:prayermeeting,
        psd:'https://mega.nz/file/MCllEAhb#csD4EY2vWq2L7Idvlcgu-_4B9d48RKDMpQKfLAgQukw',
    },
    {
        id:"6",
        name:"Sunday Bible Studies",
        category:"sundayservice",
        image:sundaybiblestudies,
        psd:"https://mega.nz/file/sGs3BKSQ#OqUsNuEQXCrALxty6jq-zmhIrFx8PV4vw_FKl-B7qxI"
    },
    {
        id:'7',
        name:'Sunday Prayer Service',
        category:"sundayservice",
        image:tazie,
        psd:'https://mega.nz/file/FK8XzRKL#Z_3DhA5T1pwEIUraMhPls9NscehU210GPaqGlzxwghk'
    },
    {
        id:'8',
        name:'Sunday Serivce',
        category:"sundayservice",
        image:youth,
        psd:'https://mega.nz/file/UC003SQJ#emN4A4RJBT3qV7hgRC_woEcSDxkePaU9a58M2KLCVzE'
    },
    {
        id:'9',
        name:'Family Week',
        category:"weekcelebrations",
        image:familyweek,
        psd:'https://mega.nz/file/JT9FDSYD#A2fZy8T6N6uvtC5mljVa_tNQis6Bg5db9BLPYy9m-wo'
    }
]


export {navlinks, designs}