session_start();

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "mywebshop";
$websitename = "Web%202324/module-4-1-crud-wdv-Markp33";

$con = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if ($con -> connect_errno) {
    echo "Failed to connect to MySQL: " . $con -> connect_error;
    exit();
}

define("BASEURL","http://localhost/Web2324/module-4-1-crud-wdv-Markp33/");
define("BASEURL_CMS","http://localhost/Web2324/module-4-1-crud-wdv-Markp33/admin/");

function prettyDump ( $var ) {
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
}
