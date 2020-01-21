<?php
	Define("CONNEXION","curl");

	function get_html($url, $parametres=array()) {
		if (CONNEXION=="curl") {
			$params='';
			if ($parametres['Referer']!="") $params.='-e '.$parametres['Referer'];
			if ($parametres['Proxy']!="") $params.='-x '.$parametres['Proxy'];
			if ($parametres['BrowserName']!="") $params.='-A "'.$parametres['BrowserName'].'"';
			return (`curl $params $url`);
		}
		else {
			if (strtoupper(substr($url,0,7))=="HTTP://") $url=substr($url,7);
			$p = strpos($url,"/");
			if ($p===FALSE) {
				$nom_domaine=$url;
				$get="/";
			}
			else {
				$nom_domaine=substr($url,0,$p);
				$get=substr($url,$p);
			}

echo "nom_domaine=$nom_domaine<br />";
echo "url=$url<br />";
echo "get=$get<br />";
	
			$errno=""; $errstr=""; $r="";
			$fp = fsockopen($url, 80, &$errno, &$errstr, 15);
			if($fp) {
echo "ici<br />";
				socket_set_timeout($fp, 15);
				fputs($fp,"GET $get HTTP/1.1\r\n");
				fputs($fp,"Host: $nom_domaine\r\n");
				fputs($fp,"Connection: Close\r\n\r\n");
				$r="";
				while(!feof($fp)) {
					$r.=fgets($fp,1024);
				}
				fclose($fp);
				return($r);
			}
			else {
				echo "errno=$errno<br />";
				echo "errstr=$errst<br />";
			}
			return('');
		}
	}

//	$html = get_html(
//			'https://www.polarpersonaltrainer.com/shared/exercise.ftl?shareTag=b8e83deccfaa856953928ad189c91e22',
//			array( 'BrowserName'=>'Mozilla/4.0 (compatible; MSIE 6.0;Windows NT 5.0)' )
//		);
	$html = get_html(
			'http://www.google.fr',
			array( 'BrowserName'=>'Mozilla/4.0 (compatible; MSIE 6.0;Windows NT 5.0)' )
		);

	echo $html;
?>
