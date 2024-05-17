namespace Res {
  export interface StyleKeyword {
    keyWord: string;
    descWord?: any;
  }

  export interface Data {
    showKeyword: string;
    styleKeyword: StyleKeyword;
    realkeyword: string;
    searchType: number;
    action: number;
    alg: string;
    gap: number;
    source?: any;
    bizQueryInfo: string;
    logInfo?: any;
    imageUrl?: any;
    trp_type?: any;
    trp_id?: any;
  }

  export interface RootObject {
    code: number;
    message?: any;
    data: Data;
  }
}

// 主页
namespace Home {
  // 主页
  export interface Banner {
    pic: string;
    targetId: number;
    mainTitle?: any;
    adid?: any;
    targetType: number;
    titleColor: string;
    typeTitle: string;
    url?: any;
    adurlV2?: any;
    exclusive: boolean;
    monitorImpress?: any;
    monitorClick?: any;
    monitorType?: any;
    monitorImpressList: any[];
    monitorClickList: any[];
    monitorBlackList?: any;
    extMonitor?: any;
    extMonitorInfo?: any;
    adSource?: any;
    adLocation?: any;
    encodeId: string;
    program?: any;
    event?: any;
    video?: any;
    dynamicVideoData?: any;
    song?: any;
    bannerId: string;
    alg: string;
    scm: string;
    requestId: string;
    showAdTag: boolean;
    pid?: any;
    showContext?: any;
    adDispatchJson?: any;
    s_ctrp: string;
    logContext?: any;
    bannerBizType: string;
  }

  export interface ExtInfo {
    banners: Banner[];
  }

  export interface Block {
    blockCode: string;
    showType: string;
    dislikeShowType: number;
    extInfo: ExtInfo;
    canClose: boolean;
    blockStyle: number;
    canFeedback: boolean;
    blockDemote: boolean;
    sort: number;
  }

  export interface PageConfig {
    refreshToast: string;
    nodataToast: string;
    refreshInterval: number;
    title?: any;
    fullscreen: boolean;
    abtest: string[];
    songLabelMarkPriority: string[];
    songLabelMarkLimit: number;
    homepageMode: string;
    showModeEntry: boolean;
    orderInfo?: any;
  }

  export interface GuideToast {
    hasGuideToast: boolean;
    toastList: any[];
  }

  export interface Data {
    cursor: string;
    blocks: Block[];
    hasMore: boolean;
    blockUUIDs?: any;
    pageConfig: PageConfig;
    guideToast: GuideToast;
    internalTest?: any;
    titles: any[];
    blockCodeOrderList?: any;
    exposedResource: string;
    demote: boolean;
  }

  export interface Trp {
    rules: string[];
  }

  export interface RootObject {
    code: number;
    data: Data;
    message: string;
    trp: Trp;
  }
}

namespace TopListDetail {
  export interface Subscriber {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail?: any;
    anchor: boolean;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    avatarImgId_str: string;
  }

  export interface AvatarDetail {
    userType: number;
    identityLevel: number;
    identityIconUrl: string;
  }

  export interface Creator {
    defaultAvatar: boolean;
    province: number;
    authStatus: number;
    followed: boolean;
    avatarUrl: string;
    accountStatus: number;
    gender: number;
    city: number;
    birthday: number;
    userId: number;
    userType: number;
    nickname: string;
    signature: string;
    description: string;
    detailDescription: string;
    avatarImgId: number;
    backgroundImgId: number;
    backgroundUrl: string;
    authority: number;
    mutual: boolean;
    expertTags?: any;
    experts?: any;
    djStatus: number;
    vipType: number;
    remarkName?: any;
    authenticationTypes: number;
    avatarDetail: AvatarDetail;
    anchor: boolean;
    avatarImgIdStr: string;
    backgroundImgIdStr: string;
    avatarImgId_str: string;
  }

  export interface Ar {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
  }

  export interface Al {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str: string;
    pic: number;
  }

  export interface H {
    br: number;
    fid: number;
    size: number;
    vd: number;
  }

  export interface M {
    br: number;
    fid: number;
    size: number;
    vd: number;
  }

  export interface L {
    br: number;
    fid: number;
    size: number;
    vd: number;
  }

  export interface Sq {
    br: number;
    fid: number;
    size: number;
    vd: number;
  }

  export interface Hr {
    br: number;
    fid: number;
    size: number;
    vd: number;
  }

  export interface Artist {
    id: number;
    name: string;
  }

  export interface AlbumMeta {
    id: number;
    name: string;
  }

  export interface OriginSongSimpleData {
    songId: number;
    name: string;
    artists: Artist[];
    albumMeta: AlbumMeta;
  }

  export interface Track {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia?: any[];
    pop: number;
    st: number;
    rt: string;
    fee: number;
    v: number;
    crbt?: any;
    cf: string;
    al: Al;
    dt: number;
    h: H;
    m: M;
    l: L;
    sq: Sq;
    hr: Hr;
    a?: any;
    cd: string;
    no: number;
    rtUrl?: any;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    mark: number;
    originCoverType: number;
    originSongSimpleData?: OriginSongSimpleData;
    tagPicList?: any;
    resourceState: boolean;
    version: number;
    songJumpInfo?: any;
    entertainmentTags?: any;
    awardTags?: any;
    single: number;
    noCopyrightRcmd?: any;
    alg?: any;
    displayReason?: any;
    rtype: number;
    rurl?: any;
    mst: number;
    cp: number;
    mv: number;
    publishTime: number;
  }

  export interface TrackId {
    id: number;
    v: number;
    t: number;
    at: number;
    alg?: any;
    uid: number;
    rcmdReason: string;
    sc?: any;
    f?: any;
    sr?: any;
    dpr?: any;
    lr: number;
  }

  export interface Playlist {
    id: number;
    name: string;
    coverImgId: number;
    coverImgUrl: string;
    coverImgId_str: string;
    adType: number;
    userId: number;
    createTime: number;
    status: number;
    opRecommend: boolean;
    highQuality: boolean;
    newImported: boolean;
    updateTime: number;
    trackCount: number;
    specialType: number;
    privacy: number;
    trackUpdateTime: number;
    commentThreadId: string;
    playCount: number;
    trackNumberUpdateTime: number;
    subscribedCount: number;
    cloudTrackCount: number;
    ordered: boolean;
    description: string;
    tags: any[];
    updateFrequency?: any;
    backgroundCoverId: number;
    backgroundCoverUrl?: any;
    titleImage: number;
    titleImageUrl?: any;
    detailPageTitle?: any;
    englishTitle?: any;
    officialPlaylistType?: any;
    copied: boolean;
    relateResType?: any;
    coverStatus: number;
    subscribers: Subscriber[];
    subscribed: boolean;
    creator: Creator;
    tracks: Track[];
    videoIds?: any;
    videos?: any;
    trackIds: TrackId[];
    bannedTrackIds?: any;
    mvResourceInfos?: any;
    shareCount: number;
    commentCount: number;
    remixVideo?: any;
    newDetailPageRemixVideo?: any;
    sharedUsers?: any;
    historySharedUsers?: any;
    gradeStatus: string;
    score?: any;
    algTags?: any;
    distributeTags: any[];
    trialMode: number;
    displayTags?: any;
    playlistType: string;
    toplistType: string;
  }

  export interface FreeTrialPrivilege {
    resConsumable: boolean;
    userConsumable: boolean;
    listenType: number;
    cannotListenReason: number;
    playReason?: any;
  }

  export interface ChargeInfoList {
    rate: number;
    chargeUrl?: any;
    chargeMessage?: any;
    chargeType: number;
  }

  export interface Privilege {
    id: number;
    fee: number;
    payed: number;
    realPayed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    pc?: any;
    toast: boolean;
    flag: number;
    paidBigBang: boolean;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl?: any;
    freeTrialPrivilege: FreeTrialPrivilege;
    rightSource: number;
    chargeInfoList: ChargeInfoList[];
  }

  export interface RootObject {
    list: any;
    code: number;
    relatedVideos?: any;
    playlist: Playlist;
    urls?: any;
    privileges: Privilege[];
    sharedPrivilege?: any;
    resEntrance?: any;
    fromUsers?: any;
    fromUserCount: number;
    songFromUsers?: any;
  }
}

namespace TopMv {
  export interface Artist {
    id: number;
    name: string;
  }

  export interface TagSign {
    br: number;
    type: string;
    tagSign: string;
    resolution: number;
    mvtype: string;
  }

  export interface Video {
    tagSign: TagSign;
    tag: string;
    url: string;
    duration: number;
    size: number;
    width: number;
    height: number;
    container: string;
    md5: string;
    check: boolean;
  }

  export interface Mv {
    authId: number;
    status: number;
    id: number;
    title: string;
    subTitle: string;
    appTitle: string;
    aliaName: string;
    transName: string;
    pic4v3: number;
    pic16v9: number;
    caption: number;
    captionLanguage: string;
    style?: any;
    mottos: string;
    oneword?: any;
    appword: string;
    stars?: any;
    desc: string;
    area: string;
    type: string;
    subType: string;
    neteaseonly: number;
    upban: number;
    topWeeks: string;
    publishTime: string;
    online: number;
    score: number;
    plays: number;
    monthplays: number;
    weekplays: number;
    dayplays: number;
    fee: number;
    artists: Artist[];
    videos: Video[];
  }

  export interface Artist {
    id: number;
    name: string;
  }

  export interface Data {
    id: number;
    cover: string;
    name: string;
    playCount: number;
    briefDesc?: any;
    desc?: any;
    artistName: string;
    artistId: number;
    duration: number;
    mark: number;
    mv: Mv;
    lastRank: number;
    score: number;
    subed: boolean;
    artists: Artist[];
    alias: string[];
  }

  export interface RootObject {
    code: number;
    data: Data[];
    hasMore: boolean;
    updateTime: number;
  }
}
