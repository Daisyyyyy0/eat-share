// const jsonData = require('./dinner.json'); 
const dataPanel = document.querySelector('#location  .locationWrap')
const northPanel = document.querySelector('#location .north-area .locationWrap')
const midPanel = document.querySelector('#location .mid-area .locationWrap')
const southPanel = document.querySelector('#location .south-area .locationWrap')
let rawWeek = ''
let rawHTML = ''
// console.log(dataPanel.length);
const areaBtns = document.querySelectorAll('#kitchen .area-btn')
// console.log(areaBtns);
const areaElements = document.querySelectorAll('.area')
const searchBar = document.querySelector('#searchBar')
const searchInput = document.querySelector('#searchBar input')

function renderWeek(thisss) {    
    rawWeek = ''
    thisss.week.forEach((item) =>{
        rawWeek += `
            <div class="week">
                <span class="ch">${item[1]}</span>
                <span class="en">${item[0]}</span>
            </div>
        `
    })
}
function renderAreaList(data){
        rawHTML = ''
        data.forEach((item) => {
            renderWeek(item);

        // rawHTML = ''    
        if(item.city =='台北市' || item.city == '新北市'){
            rawHTML =`
            <div class="kitchen-location">
            <div class="kitchen-location-img"
                style="background-image: url(${item.img});">
    
            </div>
            <div class="textWrap">
                <div class="kitchen-location-title">
                    ${item.title}
                </div>
                <div class="kitchen-location-desc text-truncate">
                    ${item.content}
                </div>
                <button type="button" class="modal-btn btn" data-bs-toggle="modal"
                        data-bs-target="#moreModal" data-id="${item.id}">
                        按我看更多
                </button>
                <div class="kitchen-location-time">
                    <div class="timeWrap">
                        <div class="timing">時段</div>
                        <div class="weekWrap">
                            ${rawWeek}
                        </div>
                    </div>
                    <div class="meal">
                        <div class="lunch">
                            <span class="ch">午</span>
                            <span class="en">lunch</span>
                        </div>
                        <div class="dinner">
                            <span class="ch">晚</span>
                            <span class="en">dinner</span>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        <div class="modal fade" id="moreModal" tabindex="-1" aria-labelledby="moreModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="moreModalLabel">台北市文山區-1</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-img"
                                style="background-image: url('./image/dinner-location1.jpg');">
                            </div>
                            <div class="modal-cooker">
                                <span>開伙人：</span>
                                <span class="name">皓媽</span>
                            </div>
                            <div class="kitchen-location-desc">
                                皓媽當全職家庭主婦近三年了，為家人烹煮健康的料理是她最大的樂趣。重視食材的品質，偏好營養均衡的料理，不過度調味，皓媽願意與你分享家庭伙食!
                                (BTW，這飯菜看起來好溫馨喔)
                            </div>
    
                            <div class="kitchen-location-time">
                                <div class="timeWrap">
                                    <div class="timing">時段</div>
                                    <div class="weekWrap">
                                        <div class="week mon">
                                            <span class="ch">星期一</span>
                                            <span class="en">Mon.</span>
                                        </div>
                                        <div class="week tues">
                                            <span class="ch">星期二</span>
                                            <span class="en">Tues.</span>
                                        </div>
                                        <div class="week wed">
                                            <span class="ch">星期三</span>
                                            <span class="en">Wed.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="meal">
                                    <div class="lunch">
                                        <span class="ch">午</span>
                                        <span class="en">lunch</span>
                                    </div>
                                    <div class="dinner">
                                        <span class="ch">晚</span>
                                        <span class="en">dinner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close-btn"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `
            northPanel.innerHTML += rawHTML
        }
        if(item.city =='台中市'){
            rawHTML =`
            <div class="kitchen-location">
            <div class="kitchen-location-img"
                style="background-image: url(${item.img});">
    
            </div>
            <div class="textWrap">
                <div class="kitchen-location-title">
                    ${item.title}
                </div>
                <div class="kitchen-location-desc text-truncate">
                    ${item.content}
                </div>
                <button type="button" class="modal-btn btn" data-bs-toggle="modal"
                        data-bs-target="#moreModal" data-id="${item.id}">
                        按我看更多
                </button>
                <div class="kitchen-location-time">
                    <div class="timeWrap">
                        <div class="timing">時段</div>
                        <div class="weekWrap">
                            ${rawWeek}
                        </div>
                    </div>
                    <div class="meal">
                        <div class="lunch">
                            <span class="ch">午</span>
                            <span class="en">lunch</span>
                        </div>
                        <div class="dinner">
                            <span class="ch">晚</span>
                            <span class="en">dinner</span>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        <div class="modal fade" id="moreModal" tabindex="-1" aria-labelledby="moreModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="moreModalLabel">台北市文山區-1</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-img"
                                style="background-image: url('./image/dinner-location1.jpg');">
                            </div>
                            <div class="modal-cooker">
                                <span>開伙人：</span>
                                <span class="name">皓媽</span>
                            </div>
                            <div class="kitchen-location-desc">
                                皓媽當全職家庭主婦近三年了，為家人烹煮健康的料理是她最大的樂趣。重視食材的品質，偏好營養均衡的料理，不過度調味，皓媽願意與你分享家庭伙食!
                                (BTW，這飯菜看起來好溫馨喔)
                            </div>
    
                            <div class="kitchen-location-time">
                                <div class="timeWrap">
                                    <div class="timing">時段</div>
                                    <div class="weekWrap">
                                        <div class="week mon">
                                            <span class="ch">星期一</span>
                                            <span class="en">Mon.</span>
                                        </div>
                                        <div class="week tues">
                                            <span class="ch">星期二</span>
                                            <span class="en">Tues.</span>
                                        </div>
                                        <div class="week wed">
                                            <span class="ch">星期三</span>
                                            <span class="en">Wed.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="meal">
                                    <div class="lunch">
                                        <span class="ch">午</span>
                                        <span class="en">lunch</span>
                                    </div>
                                    <div class="dinner">
                                        <span class="ch">晚</span>
                                        <span class="en">dinner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close-btn"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `
            midPanel.innerHTML += rawHTML
        }
        if(item.city =='高雄市'){
            rawHTML =`
            <div class="kitchen-location">
            <div class="kitchen-location-img"
                style="background-image: url(${item.img});">
    
            </div>
            <div class="textWrap">
                <div class="kitchen-location-title">
                    ${item.title}
                </div>
                <div class="kitchen-location-desc text-truncate">
                    ${item.content}
                </div>
                <button type="button" class="modal-btn btn" data-bs-toggle="modal"
                        data-bs-target="#moreModal" data-id="${item.id}">
                        按我看更多
                </button>
                <div class="kitchen-location-time">
                    <div class="timeWrap">
                        <div class="timing">時段</div>
                        <div class="weekWrap">
                            ${rawWeek}
                        </div>
                    </div>
                    <div class="meal">
                        <div class="lunch">
                            <span class="ch">午</span>
                            <span class="en">lunch</span>
                        </div>
                        <div class="dinner">
                            <span class="ch">晚</span>
                            <span class="en">dinner</span>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        <div class="modal fade" id="moreModal" tabindex="-1" aria-labelledby="moreModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="moreModalLabel">台北市文山區-1</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-img"
                                style="background-image: url('./image/dinner-location1.jpg');">
                            </div>
                            <div class="modal-cooker">
                                <span>開伙人：</span>
                                <span class="name">皓媽</span>
                            </div>
                            <div class="kitchen-location-desc">
                                皓媽當全職家庭主婦近三年了，為家人烹煮健康的料理是她最大的樂趣。重視食材的品質，偏好營養均衡的料理，不過度調味，皓媽願意與你分享家庭伙食!
                                (BTW，這飯菜看起來好溫馨喔)
                            </div>
    
                            <div class="kitchen-location-time">
                                <div class="timeWrap">
                                    <div class="timing">時段</div>
                                    <div class="weekWrap">
                                        <div class="week mon">
                                            <span class="ch">星期一</span>
                                            <span class="en">Mon.</span>
                                        </div>
                                        <div class="week tues">
                                            <span class="ch">星期二</span>
                                            <span class="en">Tues.</span>
                                        </div>
                                        <div class="week wed">
                                            <span class="ch">星期三</span>
                                            <span class="en">Wed.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="meal">
                                    <div class="lunch">
                                        <span class="ch">午</span>
                                        <span class="en">lunch</span>
                                    </div>
                                    <div class="dinner">
                                        <span class="ch">晚</span>
                                        <span class="en">dinner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close-btn"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `
            southPanel.innerHTML += rawHTML
        }        
        })
}
function filterList(data) {
    // console.log(data);
    rawHTML = ''
    dataPanel.innerHTML = ''
    data.forEach((item) => {
        rawHTML =`
            <div class="kitchen-location">
            <div class="kitchen-location-img"
                style="background-image: url(${item.img});">
    
            </div>
            <div class="textWrap">
                <div class="kitchen-location-title">
                    ${item.title}
                </div>
                <div class="kitchen-location-desc text-truncate">
                    ${item.content}
                </div>
                <button type="button" class="modal-btn btn" data-bs-toggle="modal"
                        data-bs-target="#moreModal" data-id="${item.id}">
                        按我看更多
                </button>
                <div class="kitchen-location-time">
                    <div class="timeWrap">
                        <div class="timing">時段</div>
                        <div class="weekWrap">
                            ${rawWeek}
                        </div>
                    </div>
                    <div class="meal">
                        <div class="lunch">
                            <span class="ch">午</span>
                            <span class="en">lunch</span>
                        </div>
                        <div class="dinner">
                            <span class="ch">晚</span>
                            <span class="en">dinner</span>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
        <div class="modal fade" id="moreModal" tabindex="-1" aria-labelledby="moreModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="moreModalLabel">台北市文山區-1</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-img"
                                style="background-image: url('./image/dinner-location1.jpg');">
                            </div>
                            <div class="modal-cooker">
                                <span>開伙人：</span>
                                <span class="name">皓媽</span>
                            </div>
                            <div class="kitchen-location-desc">
                                皓媽當全職家庭主婦近三年了，為家人烹煮健康的料理是她最大的樂趣。重視食材的品質，偏好營養均衡的料理，不過度調味，皓媽願意與你分享家庭伙食!
                                (BTW，這飯菜看起來好溫馨喔)
                            </div>
    
                            <div class="kitchen-location-time">
                                <div class="timeWrap">
                                    <div class="timing">時段</div>
                                    <div class="weekWrap">
                                        <div class="week mon">
                                            <span class="ch">星期一</span>
                                            <span class="en">Mon.</span>
                                        </div>
                                        <div class="week tues">
                                            <span class="ch">星期二</span>
                                            <span class="en">Tues.</span>
                                        </div>
                                        <div class="week wed">
                                            <span class="ch">星期三</span>
                                            <span class="en">Wed.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="meal">
                                    <div class="lunch">
                                        <span class="ch">午</span>
                                        <span class="en">lunch</span>
                                    </div>
                                    <div class="dinner">
                                        <span class="ch">晚</span>
                                        <span class="en">dinner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn close-btn"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            `
            dataPanel.innerHTML += rawHTML
    })
}
function showModal(id) {
    const modalTitle = document.querySelectorAll('#moreModal .modal-title')
    const modalImage = document.querySelectorAll('#moreModal .modal-img')
    const modalCoocker = document.querySelectorAll('#.modal-cooker .name')
    const modalDesc = document.querySelectorAll('#moreModal .kitchen-location-desc')

}

fetch("JS/dinner.json")
    .then(response => {
    return response.json();
    })

    .then(jsondata => {
        // console.log(jsondata.data);
        renderAreaList(jsondata.data)
        
        let locations = jsondata.data
        // console.log(locations);

        areaBtns.forEach(function(areaBtn,index){
            areaBtn.addEventListener('click', function () {
                areaBtns.forEach(function (location) {
                   location.classList.remove('active') 
                })
                this.classList.add('active')

                areaElements.forEach(function(area){
                    area.classList.remove('active')
                })
                areaElements[index].classList.add('active')
            })
        });
        

            searchBar.addEventListener('submit', function searchBarsubmitted(e){
                e.preventDefault()  //預防瀏覽器預設行為
                // console.log('click');
                const keyword = searchInput.value.trim()
                // console.log(keyword);
                // console.log(keyword.length);
                if(!keyword.length){
                    return alert('請輸入有效字串!')
                }

                let filterLocations = []
                // for (const location of locations){
                //     if(location.title.includes(keyword){
                //         filterLocations.push(location)
                //     })
                // }
                filterLocations = locations.filter( (location) =>
                    location.title.includes(keyword)
                )
                // console.log(filterLocations);
                // console.log(dataPanel);
                filterList(filterLocations)
            })

            northPanel.addEventListener('click', function onPanelClicked(e){
                if (e.target.matches('.modal-btn')){
                    // console.log(e.target.dataset);
                }
            })
        }
    );

