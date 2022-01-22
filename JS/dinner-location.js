// const jsonData = require('./dinner.json'); 
fetch("JS/dinner.json")
    .then(response => {
    return response.json();
    })
    .then(jsondata => {
        const dataPanel = document.querySelector('#location .locationWrap')
        const searchBar = document.querySelector('#searchBar')
        const searchInput = document.querySelector('#searchBar input')

        function renderList(){
            let rawHTML = ''
            dataPanel.forEach( (item) => {
                rawHTML += `
                        <div class="kitchen-location">
                        <div class="kitchen-location-img"
                            style="background-image: url(`${jsondata[0]}`);">

                        </div>
                        <div class="textWrap">
                            <div class="kitchen-location-title">
                                台北市文山區-1
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
                    </div>
                `
            })
        }
    }
        

// searchBar.addEventListener('submit', function searchBarsubmitted(e){
//     e.preventDefault()  //預防瀏覽器預設行為
//     // console.log('click');

//     const keyword = searchInput.value.trim()

//     if(!keyword.lenth){
//         return alert('請輸入有效字串!')
//     }
// })

// let filterLocations = []
// for (const location of locations){
//     if(location.title.includes(keyword){
//         filterLocations.push(location)
//     })
// }


// filterLocations = locations.filter( (location) =>
//     location.title.includes(keyword)
// )



        );

