export interface UserInfoType {
    username: string,
    fav_anime?: string
}

export interface AnimeProps {
    bannerImage: string;
    coverImage : object;
    id: number;
    description: string;
    rankings : object[]
    genres : string[]
    siteUrl : string;
    title : {
        english : string
    }
    duration : number
    episodes : number
    meanScore : number
    type : string
}