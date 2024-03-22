<?php
    if(empty($_POST['name'])==true){
        echo "Name: Not provided" . "<br>";
    }
    else{    
            echo $_POST['name']. "<br>";
    }

    if(empty($_POST['userName'])==true){
        echo "Username: Not provided!" ."<br>";
    }
    else{    
            echo $_POST['userName']. "<br>";
    }

    if(empty($_POST['password'])==true){
        echo "Password: Not provided". "<br>";
    }
    else{    
            echo $_POST['password']."<br>";
    }

    if(empty($_POST['address'])==true){
        echo "Address: Not provided". "<br>";
    }
    else{    
            echo "Address:". $_POST['address']."<br>";
    }

    if(isset($_POST['country'])){
        if(!empty($_POST['country'])) {
            $selected = $_POST['country'];
            echo $selected . "<br>";
        } else {
            echo 'Country: Not provided';
        }
    }

    if(empty($_POST['zip'])==true){
        echo "Zip: Not provided"."<br>";
    }
    else{    
            echo "Zip: ".$_POST['zip']."<br>";
    }

    if(empty($_POST['mail'])==true){
        echo "Mail: Not provided"."<br>";
    }
    else{    
            echo $_POST['mail']."<br>";
    }

    if(empty($_POST['sex'])==true){
        echo "Sex: Not provided"."<br>";
    }
    else{    
            echo $_POST['sex']."<br>";
    }

    if(empty($_POST['language'])==true){
        echo "Language: Not provided"."<br>";
    }
    else{    
            echo $_POST['language']."<br>";
    }

    if(empty($_POST['about'])==true){
        echo "About: Not provided"."<br>";
    }
    else{    
            echo $_POST['about']."<br>";
    }

?>