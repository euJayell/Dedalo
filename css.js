function generateRadioBg(q, c1, c2, mx, v, mn=0, c3='transparent') {
  const query = document.querySelectorAll(q)
  
  for(const que of query) {
    if( v > max/2) {
      que.style.backgroundImage = `linear-gradient(-90deg, ${c1} 50%, ${c3} 50%), linear-gradient(${90 + (360/(mx-mn))*v}deg, ${c1} 50%, ${c3} 50%)`
    } else {
      que.style.backgroundImage = `linear-gradient(-90deg, ${c1} 50%, ${c3} 50%), linear-gradient(${-90 + (360/(mx-mn))*value}deg, ${c2} 50%, ${c3} 50%)`
    }
  }
}
