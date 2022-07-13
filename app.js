const product_form = document.getElementById('product-form');
const msg = document.getElementById('msg');
const product_loop_list = document.getElementById('product_loop_list');

product_form.onsubmit = (e)=>{
    e.preventDefault();
    let formdata = new FormData(product_form);
    let allformdata = Object.fromEntries(formdata.entries());
    let {name, image,price,quantity} = Object.fromEntries(formdata.entries())

    const alllistdata = ()=>
    {
        let list_data = readalldata('product');
        let list = '';
        if(!list_data)
        {
            list = `<tr>
                <td colspan="6">No Proudct Found</td>
            </tr>`
        }
        if(list_data)
        {
           list_data.map((item,index)=>{
            list +=` <tr>
            <td>${index +1}</td>
            <td><img style="width:60px; height:60px; object-fit:cover;" src="${item.image}" alt=""></td>
            <td>${item.name}</td>
            <td>${item.price} Taka</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity} Taka</td>
        </tr>`
           })
        }
        product_loop_list.innerHTML= list;
    }
    alllistdata();

    if(!name||!image||!price||!quantity)
    {
       msg.innerHTML= setalert('all Fields Are Required','danger');
       msg.style.display='block'
       msg.style.width='100%'
    }
    else
    {
      msg.innerHTML= setalert('Data Stable','success');
      msg.style.display='block'
      msg.style.width='100%'
      product_form.reset();
      lsdata('product', allformdata)
      alllistdata();
    }
}