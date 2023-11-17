
axios.get('https://leonardoapi.onrender.com/music')
.then( (res) => { //aqui se reciben los datos del servidor

    let track_list = document.querySelector('#track_list')
    console.log(track_list)
    
    
    res.data.map ( (song) => { // se mapean las canciones

        // creo el componente
        let div = document.createElement ('div')
        div.classList.add('musica')

        div.addEventListener('click', () => {

            console.log('hizo click')
            document.querySelector('#current-song-title').innerHTML= song.title
            document.querySelector('#current-song-author').innerHTML = song.author
            document.querySelector('#current-song-img').setAttribute('src', song.path.front)
            document.querySelector('#current-song-audio').setAttribute('src', song.path.audio)

        })

        //agrego el contenido al componente
        div.innerHTML =
        `
        <img src="${song.path.front}" alt="">

        <li class="cancion">
                <div class="cancion">
                     <h3>${song.title}</h3>
                     <p>${song.author}</p>
                    
                </div>
        </li>
        `

        div.addEventListener('click', () => {

            //clase siguiente ponemos a reporducir aqui
            document.querySelector


        })



        //agrego el componente al contenedor
        track_list.appendChild(div)

    })
    
})



