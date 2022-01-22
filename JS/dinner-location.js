// const jsonData = require('./dinner.json'); 
const dataPanel = document.querySelector('#location .north-area .locationWrap')
// console.log(dataPanel.length);
const searchBar = document.querySelector('#searchBar')
const searchInput = document.querySelector('#searchBar input')

function renderList(data){
        let rawHTML = ''
        data.forEach((item) => {
            // console.log(item);
        rawHTML += `
                        <div class="kitchen-location">
                        <div class="kitchen-location-img"
                            style="background-image: url(${item.img});">

                        </div>
                        <div class="textWrap">
                            <div class="kitchen-location-title">
                                ${item.title}
                            </div>
                            <div class="kitchen-location-desc">
                                ${item.content}
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
                                        <div class="week thus">
                                            <span class="ch">星期四</span>
                                            <span class="en">Thus.</span>
                                        </div>
                                        <div class="week fri">
                                            <span class="ch">星期五</span>
                                            <span class="en">Fri.</span>
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
        dataPanel.innerHTML = rawHTML
}

fetch("JS/dinner.json")
    .then(response => {
    return response.json();
    })

    .then(jsondata => {
        // console.log(jsondata.data);
        renderList(jsondata.data)
        let locations = jsondata.data
        // console.log(locations);
        
            searchBar.addEventListener('submit', function searchBarsubmitted(e){
                e.preventDefault()  //預防瀏覽器預設行為
                // console.log('click');
                const keyword = searchInput.value.trim()
                console.log(keyword);
                console.log(keyword.lenth);

                // if(!keyword.lenth){
                //     return alert('請輸入有效字串!')
                // }

                let filterLocations = []
                // for (const location of locations){
                //     if(location.title.includes(keyword){
                //         filterLocations.push(location)
                //     })
                // }
                filterLocations = locations.filter( (location) =>
                    location.title.includes(keyword)
                )
                console.log(filterLocations);
                renderList(filterLocations)
            })
        }
    );

