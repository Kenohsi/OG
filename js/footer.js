const createFooter = () =>{
    let footer = document.querySelector('footer');
    footer.innerHTML = ` <div class ="footer-content">
    <img src="transparent logog.png" width ="200px" height="60px">
  </div>
  <div class="footer-col-2">
   <p>Follow us on:</p>
  <ul>
      <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
      <li><a href="https://www.twitter.com/" target="_blank">Twitter</a></li>
      <li><a href="https://www.Instagram.com/" target="_blank">Instagram</a></li><br><br>
  </ul>
</div>
<div class="Contact Container">
   <div class="Contact">
   <h5>Contact Us!</h5>
   <i class="fa fa-map-marker" style="width:30px"></i> Vienna, Austria<br>
   <i class="fa fa-phone" style="width:30px"></i> Phone: +4364126165<br>
   <i class="fa fa-envelope" style="width:30px"> </i> Email: ordergreen@gmail.com<br>
 </div>
</div>
 <address>
   Written by <a href="mailto:JaneDoe@gmail.com/">Ordergreen Team</a><br><br>
   <p>Download App For Android and IOS mobile phone:</p>
                   <div class="app-logo">
                       <img src="google_badge.png"width="150px" height="60px">
                       <img src="apple_badge.jpg" width="150px" height="50px"><br> 
                       <a href="#top">Go to Top</a><br> 
                   </div>                  
</address>`;
}

createFooter();
