const createFooter = () =>{
    let footer = document.querySelector('footer');
    footer.innerHTML = ` <div class ="footer-content">
   
  </div>
  <div class="footer-col-2">

</div>
<div class="Contact Container">
   <div class="Contact">
   <h5>Contact Us!</h5>
   <i class="fa fa-map-marker" style="width:30px"></i> Vienna, Austria<br>
   <i class="fa fa-phone" style="width:30px"></i> Phone: +4364126165<br>
   <i class="fa fa-envelope" style="width:30px"> </i> Email: <a href="mailto:ordergreen@gmail.com">ordergreen@gmail.com</a><br>
 </div>
</div>
 <address>
   Written by <a href="mailto:ordergreen@gmail.com">Team Ordergreen </a><br><br>

                   <div class="app-logo">
         
                       <a href="#top">Go to Top</a><br> 
                   </div>                  
</address>`;
}

createFooter();
