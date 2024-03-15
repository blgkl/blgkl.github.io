<!DOCTYPE html>

<html lang="en">
<head>
    <title>Java Jam Coffee House</title>
    <meta name="description" content="CENG 311 Inclass Activity 1" />

</head>

<body>

<?php 

$input_money='';
$input_currency='';
$output_money='';
$output_currency='';

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Kullanıcı girdilerini al
    if (isset($_GET['input'])) {
        $input_money = $_GET['input'];
    }

    if (isset($_GET['currencies_in'])) {
        $input_currency = $_GET['currencies_in'];
    }

    if (isset($_GET['currencies_out'])) {
        $output_currency = $_GET['currencies_out'];
    }

    // convert fonksiyonunu çağır
    $output_money = convert($input_money, $input_currency, $output_currency);
}

function convert($input_money, $input_currency, $output_currency){
	
        $value = $input_money;
    
	if($input_currency=='FUSD' && $output_currency=='TCAD'){ // usd to cad
		$value= $value*135.40;
	}
	if($input_currency=='FUSD' && $output_currency=='TEUR'){ // usd to eur
		$value= $value*91.82;
	}
	if($input_currency=='FCAD' && $output_currency=='TUSD'){ // cad to usd
		$value= $value*73.86;
	}
	if($input_currency=='FCAD' && $output_currency=='TEUR'){ // cad to eur
		$value= $value*67.82;
	}
	if($input_currency=='FEUR' && $output_currency=='TUSD'){ // eur to usd
		$value= $value*108.89;
	}
	if($input_currency=='FEUR' && $output_currency=='TCAD'){ // eur to cad
		$value= $value*147.44;
	}
	
    return $value;
}

?>

	<form action = "activity4.php" method="GET">
		<table>
			<tr>
				<td>
					From:
				</td>
				<td>
					<input type="text" name="input" value="<?php echo $input_money; ?>"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="currencies_in">
						<option value="FUSD"<?php if ($input_currency === 'FUSD') echo ' selected'?>/> USD </option>
						<option value="FCAD"<?php if ($input_currency === 'FCAD') echo ' selected'?>/> CAD </option>
						<option value="FEUR"<?php if ($input_currency === 'FEUR') echo ' selected'?>/> EUR </option>
					</select>
				</td>	
			</tr>
			<tr>
				<td>
					To:
				</td>
				<td>
					<input type="text" name="output" value="<?php echo $output_money; ?>"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="currencies_out">
						<option value="TUSD"<?php if ($output_currency === 'TUSD') echo ' selected'?>/> USD </option>
						<option value="TCAD"<?php if ($output_currency === 'TCAD') echo ' selected'?>/> CAD </option>
						<option value="TEUR"<?php if ($output_currency === 'TEUR') echo ' selected'?>/> EUR </option>
					</select>
				</td>	
			</tr>
				<tr>
				<td>
					
				</td>
				<td>
					
				</td>
				<td>
					
				</td>
				<td>
					<input type="submit" value="convert"/>
				</td>	
			</tr>
		</table>
		
	</form>		
</body>