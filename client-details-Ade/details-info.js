const detailBtn = document.getElementsByClassName('detailsC')[0]
const  infoBtn = document.getElementsByClassName('infoC')[0]
const  infoDiv = document.getElementsByClassName('info-main-content')[0]
const  detailsDiv = document.getElementsByClassName('main-details')[0]


detailBtn.addEventListener('click', function(event){
   infoDiv.classList.add('none')
   detailsDiv.classList.remove('none')
detailBtn.style.border =' 1px solid #407BFF'
detailBtn.style.color =' #407BFF'
infoBtn.style.color =' black'

infoBtn.style.border ='none'

})
infoBtn.addEventListener('click', function(event){
   detailsDiv.classList.add('none')
   infoDiv.classList.remove('none')
   infoBtn.style.border =' 1px solid #407BFF'
   detailBtn.style.border ='none'
   infoBtn.style.color =' #407BFF'
   detailBtn.style.color =' black'

})