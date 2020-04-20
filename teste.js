let nomes=[["Rede","Verificar Rede","Configurar Rede","Testar coenxão com host","Tabela ARP"],
		   ["Arquivos","Arquivos da pasta pessoal","Criar diretorio","Apagar diretorio","Criar arquivo","Apagar arquivo"],
		   ["Usuarios","Usuarios logados","Ultimos usuarios que logaram"],
		   ["Memoria","Espaço livre","Espaço utilizado"],
		   ["Processos","Processos atuais","Encerrar processo por nome","Encerrar processo pelo PID"],
		   ["Data e Hora"]];

let links =[["ver_rede.cgi","rede_get.cgi","ping_net.cgi","tabela_arp_jacyi.cgi"],
			["arquivos.cgi","cria_diretorio.cgi","apaga_diretorio.cgi","cria_arquivo.cgi","remove_arquivo.cgi"],
			["usuarios_atuais.cgi","ultimos_usuarios.cgi"],
			["espaco_livre.cgi","espaco_usado.cgi"],
			["processos.cgi","encerra_proc_nome.cgi","encerra_proc_pid.cgi"],
			["data_hora.cgi"]];


let pc="http://localhost/cgi-bin/";


function criaSubMenus(i){
	let subMenus="";
	for (let y=1;y<nomes[i].length;y++){
		subMenus+='		<a id="'+"bt"+i+y+'">'+nomes[i][y]+'</a>';
	}
	return subMenus;
}

function criaMenus(){
	let menus="";
	for (let i=0;i<nomes.length;i++){
		menus+='<li class="dropdown">'+
		'	<a id="'+"bt"+i+'" class="dropbtn">'+nomes[i][0]+'</a>'+
		'	<div class="dropdown-content">'+
		criaSubMenus(i)+
		'	</div>'+
		'</li>';
	}
	return menus;
}

function saida(i,y){
	document.getElementById("frame").src=pc+links[i][y];
}

function linkSubMenu(i){
	for (let y=0;y<nomes[i].length-1;y++){
		document.getElementById("bt"+i+(y+1)).onclick=function(){
			saida(i,y);
		}
	}
}

function linkMenu(i){
	document.getElementById("bt"+i).onclick=function(){
		saida(i,0);
	}
}

document.getElementById("menu").innerHTML=criaMenus();

for (let i=0;i<nomes.length;i++){
	if (nomes[i].length>1){
		linkSubMenu(i);
	}
	else{
		linkMenu(i);
	}
}

document.getElementById("frame").src=pc+links[links.length-1];
