const setalert = (msg,type)=>
{
  return `<p class="alert alert-${type} fade show d-flex justify-content-between">${msg} <a href="" class="btn btn-close" data-bs-dismiss="alert"></a></p>`;
}

const lsdata = (key, value)=>
{
    let oldlsdata=[];
    if(localStorage.getItem(key))
    {
        oldlsdata = JSON.parse(localStorage.getItem(key))
    }
    oldlsdata.push(value)
    return localStorage.setItem(key, JSON.stringify(oldlsdata));
}
const readalldata = (key)=>{
    if(localStorage.getItem(key))
    {
        return JSON.parse(localStorage.getItem(key))
    }
    else 
    {
        return false;
    }
}