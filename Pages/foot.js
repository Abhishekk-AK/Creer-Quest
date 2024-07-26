let appFooter = `
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Footer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <link rel="stylesheet" href="footer.css">
  </head>
  <body>
<footer>
    <div class="container4">
      <div class="rights">
        <p>&copy;2023 Career Quest. All rights are reserved.</p>
      </div>
      <div class="row">
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about_us.html"> About Us</a></li>
            <li><a href="OurServices.html">Our Services</a></li>
            <li><a href="privacy_policy.html">Privacy Policy</a></li>
            
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li><a href="FAQ.html">FAQ</a></li>
            <li><a href="contactus.html">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Career Doubts</h4>
          <ul>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Jobs</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="https://www.facebook.com/login.php"><i class="fab fa-facebook-f"></i> </a>
            <a href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i> </a>
            <a href="https://www.instagram.com/?hl=en"><i class="fab fa-instagram"></i> </a>
            <a href="https://www.linkedin.com/login"><i class="fab fa-linkedin-in"></i> </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </body>
</html>
`;
document.getElementById("app-footer").innerHTML = appFooter;