function movieObject(title,scr,hour,min,date,imdb){
    return  {
        title,
        scr,
        imdb,
        date,
        hour,
        min,
        get time(){
            return `${this.hour}HR ${this.min}MIN`
        }
    }
}
let movieList=[]

let avengers=movieObject('avengers: endgame','img/avengers.jpg','2','40','sun 8 sep- 6:30pm',7.1)
movieList.push(avengers)

let hobbs=movieObject('Hobbs & show','img/hobbs-and-shaw.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(hobbs)

let johnWick=movieObject('john wick 3','img/John-Wick-3.jpg','3','13','sun 8 sep- 6:30pm',9.7)
movieList.push(johnWick)

let DeadPool=movieObject('Dead pool 2','img/deadpool.jpg','2','30','sun 8 sep- 6:30pm',8.1)
movieList.push(DeadPool)

let LionKing=movieObject('the lion king','img/the-lion-king.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(LionKing)

let madMax=movieObject('mad max: fury road','img/mad-max.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(madMax)

let Aquaman=movieObject('Aquaman','img/aquaman.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(Aquaman)

let Mission=movieObject('Mission Impossible','img/mission-impossible.jpg','2','13','sun 8 sep- 6:30pm',9.7)
movieList.push(Mission)


function CreatMovieCard(obj){
  return  `
     <div class="movie-card">
        <img src=${obj['scr']} />
            <p class="title">${obj['title']}</p>
            <p class="imdb left"><span>${obj['imdb']} </span>/10</p>

            <p class="update">last Update </p>
            <p class="update-info left">release Time</p>
            <p class="date">${obj['date']}</p>
            <p class="time left">${obj['time']}</p>
    </div>
    `
}
function movieHtmls(arr){
    return arr.map(movie=>{
         return CreatMovieCard(movie)
    }).join('')
}
let movieContainer=document.getElementById('movie-container')
movieContainer.innerHTML=movieHtmls(movieList)

function onSearch(element){
    let searchTerm=element.value;
    let movieFilter=movieList.filter(movie=>{
       return (movie.title.includes(searchTerm))

    })
    movieContainer.innerHTML=movieHtmls(movieFilter)
}


