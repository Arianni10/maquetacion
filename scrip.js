
axios.get('https://leonardoapi.onrender.com/music')
.then( (res) => { //aqui se reciben los datos del servidor

    let track_list = document.querySelector('#track_list')
    console.log(track_list)
    
    
    res.data.map ( (song) => { // se mapean las canciones

        // creo el componente
        let div = document.createElement ('div')
        div.classList.add('musica')

        //agrego el contenido al componente
        div.innerHTML =
        `
        <img src="${song.path.front}" alt="">

        <li class="cancion">
                <div class="cancion">
                     <h3>${song.titlle}</h3>
                     <p>${song.author}</p>
                    
                </div>
        </li>
        `
        div.addEventListener('click',() => {

            // 

            document.querySelector('#audio').setAttribute('src',song.path.audio)
            document.querySelector('#title').innerHTML=song.titll0e
        })
        //agrego el componente al contenedor
        track_list.appendChild(div)

    })
    
})



