(window.webpackJsonpdocumentation=window.webpackJsonpdocumentation||[]).push([[0],{182:function(t,e,n){t.exports=n(533)},527:function(t,e,n){},533:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(7),i=n.n(r),l=n(161),c=n(162),s=n(179),d=n(163),p=n(82),m=n(178),u=n(537),h=n(118),g=n(535),E=n(10),v=n(540),f=n(541),y=n(539),b=n(538),k=n(534),M=u.a.Paragraph,x=u.a.Title,I={title:"Infraestructura Aplicaci\xf3n Web",content:o.a.createElement("div",null,o.a.createElement(b.a,{language:"javascript",style:k.a},o.a.createElement(M,null,"+---+ archetype-editor-web\n\t|---+ backend\n\t\t|---+ models\n\t\t|---+ public\n\t\t|---+ routes\n\t\t|---+ db.js\n\t\t|---+ index.js\n\t|---+ frontend\n\t\t|---+ src\n\t\t\t|---+ actions\n\t\t\t|---+ components\n\t\t\t|---+ store\n\t\t|---+ index.html\n\t|---+ .babelrc\n\t|---+ .gitignore\n\t|---+ package.json\n\t|---+ package-lock.json\n\t|---+ webpack.config.json\n")),o.a.createElement(x,{level:2},'El directorio "backend"'),o.a.createElement("p",null,"En este directorio se encuentran todos los archivos relacionados con el servidor."),o.a.createElement(x,{level:3},'El directorio "models"'),o.a.createElement("p",null,"En este directorio se encuentran todos los archivos relacionados con los modelos de datos, es en cada archivo de este directorio donde se define el schema correspondiente al dato de la DB MongoDB."),o.a.createElement(x,{level:3},'El directorio "public"'),o.a.createElement("p",null,"En este directorio se encuentran todos los archivos p\xfablicos del servidor, en este caso aqu\xed se almacena el c\xf3digo compilado a html, css, y js puro."),o.a.createElement(x,{level:3},'El directorio "routes"'),o.a.createElement("p",null,"En este directorio se encuentran todos los archivos relacionados con las rutas para el manejo de peticiones desde la aplicaci\xf3n web/desktop para la interacci\xf3n con la DB."),o.a.createElement(x,{level:3},'El archivo "db.js"'),o.a.createElement("p",null,"En este archivo se encuentra la conexi\xf3n a la base de datos MongoDB, mediante mongoose."),o.a.createElement(x,{level:3},'El archivo "index.js"'),o.a.createElement("p",null,"En este archivo se encuentra el c\xf3digo principal que se ejecutar\xe1 en el servidor, es aqu\xed donde se define el comportamiento l\xf3gico del servidor, aqu\xed se inicializa el servidor express y se le asignan los pa\xe1metros correspondientes (rutas, etc)."),o.a.createElement(x,{level:2},'El directorio "frontend"'),o.a.createElement("p",null,"En este directorio se encuentran todos los archivos relacionados con la aplicaci\xf3n cliente."),o.a.createElement(x,{level:3},'El directorio "src"'),o.a.createElement("p",null,"En este directorio se encuentran los componentes, el store, y las actions correspondientes para el uso de react-redux."),o.a.createElement(x,{level:3},'El archivo "index.html"'),o.a.createElement("p",null,"En este archivo se encuentra el c\xf3digo html principal en donde se monta la aplicaci\xf3n react."))},w=u.a.Paragraph,D=u.a.Title,F={title:"Infraestructura Aplicaci\xf3n Desktop",content:o.a.createElement("div",null,o.a.createElement(b.a,{language:"javascript",style:k.a},o.a.createElement(w,null,"+---+ archetype-editor-desktop\n\t|---+ public\n\t\t|---+ electron.js\n\t\t|---+ index.html\n\t|---+ src\n\t\t|---+ actions\n\t\t|---+ components\n\t\t|---+ store\n\t|---+ .gitignore\n\t|---+ package.json\n\t|---+ package-lock.json\n")),o.a.createElement(D,{level:2},'El directorio "public"'),o.a.createElement("p",null,'En este directorio se encuentra el archivo index.html que se monta en la aplicaci\xf3n electron si es que se est\xe1 en modo producci\xf3n y el archivo "electron.js", que es el cl\xe1sico "main.js" de electron, es decir, el c\xf3digo que define la aplicaci\xf3n electron.'),o.a.createElement(D,{level:3},'El directorio "src"'),o.a.createElement("p",null,"En este directorio se encuentran los componentes, el store, y las actions correspondientes para el uso de react-redux."),o.a.createElement(D,{level:3},'El archivo "index.html"'),o.a.createElement("p",null,"En este archivo se encuentra el c\xf3digo html principal en donde se monta la aplicaci\xf3n react."))},C=u.a.Paragraph,T=u.a.Title,S=u.a.Text,A={title:"Comenzando",content:o.a.createElement("div",null,o.a.createElement(T,{level:2},"Pre-Requisitos"),o.a.createElement(C,null,"Primero es necesario tener instalado NodeJS en el equipo, para esto se descarga mediante el sitio web oficial:"),o.a.createElement("a",{href:"https://nodejs.org/es/"},"NodeJS."),o.a.createElement(C,null,"Tambi\xe9n es necesario tener instalado MongoDB en el equipo, para esto se descarga mediante el sitio web oficial:"),o.a.createElement("a",{href:"https://www.mongodb.com/es"},"MongoDB."),o.a.createElement(C,null,"Y se debe tener en ejecuci\xf3n el servidor MongoDB."),o.a.createElement(T,{level:2},"Instalaci\xf3n y Comandos b\xe1sicos"),o.a.createElement(C,null,"Primero se debe hubicar una consola o terminal en el directorio del proyecto (la aplicaci\xf3n web est\xe1 en un directorio separado de la aplicaci\xf3n de escritorio), luego se debe acceder por separado a cada directorio y ejecutar el siguiente comando:"),o.a.createElement(S,{code:!0},"npm install"),o.a.createElement(C,null,"Luego, para el caso de la aplicaci\xf3n web se debe ejecutar el siguiente comando para poner en marcha tanto el servidor de desarrollo de react como el servidor express (NodeJS) que recibe las peticiones de la aplicaci\xf3n web:"),o.a.createElement(S,{code:!0},"npm run dev"),o.a.createElement(C,null,"El siguiente comando en la aplicaci\xf3n web realiza el traspaso de c\xf3digo en lenguaje jsx a javascript puro mediante webpack:"),o.a.createElement(S,{code:!0},"npm run build"),o.a.createElement(C,null,"Este comando posiciona el c\xf3digo de salida en el directorio del cual el servidor Express carga dicho archivo (esto es m\xe1s que nada para la etapa de producci\xf3n)."),o.a.createElement(C,null,"El siguiente comando en la aplicaci\xf3n web ejecuta el servidor Express en modo de producci\xf3n:"),o.a.createElement(S,{code:!0},"npm start"),o.a.createElement(C,null,"Ahora para el caso de la aplicaci\xf3n de escritorio, se describen los siguientes comandos:"),o.a.createElement(S,{code:!0},"npm start"),o.a.createElement(C,null,"Este comando pone en marcha el servidor de desarrollo para el ambiente de ReactJS."),o.a.createElement(S,{code:!0},"npm run build"),o.a.createElement(C,null,"Este comando genera el c\xf3digo javascript puro en base al c\xf3digo ReactJS."),o.a.createElement(S,{code:!0},"npm run electron-dev"),o.a.createElement(C,null,"Este comando es el que ejecuta tanto el entorno de desarrollo de ReactJS como la aplicaci\xf3n ElectronJS."),o.a.createElement(S,{code:!0},"npm run pack"),o.a.createElement(C,null,"Este comando empaqueta la aplicaci\xf3n ElectronJS."),o.a.createElement(S,{code:!0},"npm run dist"),o.a.createElement(C,null,"Finalmente este comando genera el instalador de la apliaci\xf3n ElectronJS."))},j=n(536),P=u.a.Paragraph,R=u.a.Title,L=j.a.Column,q={title:"Administrador de archivos",content:o.a.createElement("div",null,o.a.createElement(R,{level:2},'El componenete "FileManager".'),o.a.createElement(b.a,{language:"javascript",style:k.a},o.a.createElement(P,{copyable:!0},"import React, { Component } from 'react';\nimport { connect } from 'react-redux';\nimport { toggleFile, onEdit, changeName, removeFile } from '../actions/FileManager';\nimport { handlerDownload } from '../actions/home';\nimport { Tabs, Icon, Typography, Modal } from 'antd';\nimport './FileManager.css';\nconst { TabPane } = Tabs;\nconst { Paragraph } = Typography;\nconst { confirm } = Modal;\nclass FileManager extends Component {\n\trender(){\n\t\treturn (\n\t\t\t<div className='file-manager'>\n\t\t\t\t<Tabs\n\t\t\t\t\tonChange={this.props.handlerToggle}\n\t\t\t\t\tactiveKey={this.props.currentFile}\n\t\t\t\t\ttype='editable-card'\n\t\t\t\t\tonEdit={this.props.handlerEdit}\n\t\t\t\t>\n\t\t\t\t\t{this.props.files.map((pane, indx) => (\n\t\t\t\t\t\t<TabPane className='tab-content' tab={\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<Paragraph className='display-inline' editable={{ onChange: str=>{this.props.handlerChangeName(str, pane.key, indx, this)} }}>{pane.title}\n\t\t\t\t\t\t\t\t</Paragraph>\n\t\t\t\t\t\t\t\t<Icon type='close' className='close' onClick={(e)=>{this.props.showConfirm(e, this.props.currentFile, this.props.files)}}/>\n\t\t\t\t\t\t\t</div>} key={pane.key}>\n\t\t\t\t\t\t\t{pane.content}\n\t\t\t\t\t\t</TabPane>\n\t\t\t\t\t))}\n\t\t\t\t</Tabs>\n\t\t\t</div>\n\t\t);\n\t}\n}\nconst mapStateToProps = state => {\n\treturn {\n\t\tnewTabIndex: state.newTabIndex,\n\t\tfiles: state.files,\n\t\tcurrentFile: state.currentFile\n\t};\n}\nconst mapDispatchToProps = dispatch => {\n\treturn {\n\t\thandlerToggle(activeKey) {\n\t\t\tdispatch(toggleFile(activeKey));\n\t\t},\n\t\thandlerEdit(targetKey, action){\n\t\t\tdispatch(onEdit(action));\n\t\t},\n\t\thandlerChangeName(newName, key, indx, tab){\n\t\t\tdispatch(changeName(newName, key, indx));\n\t\t\ttab.forceUpdate();\n\t\t},\n\t\tshowConfirm(e, key, files) {\n\t\t\tconfirm({\n\t\t\t\ttitle: 'Cuidado!',\n\t\t\t\tcontent: 'Haz realizado cambios en el archivo, \xbfDeseas descargar el archivo antes de cerrarlo?',\n\t\t\t\tonOk() {\n\t\t\t\t\tconst fileTarget = files.filter(ofile => ofile.key === key)[0];\n\t\t\t\t\tif(fileTarget && fileTarget.saved === false){\n\t\t\t\t\t\thandlerDownload(dispatch, key, files);\n\t\t\t\t\t}\n\t\t\t\t\tdispatch(removeFile(key));\n\t\t\t\t},\n\t\t\t\tonCancel() {dispatch(removeFile(key));},\n\t\t\t});\n\t\t}\n\t}\n}\nexport default connect(mapStateToProps, mapDispatchToProps)(FileManager);")),o.a.createElement(j.a,{dataSource:[{key:"1",atributo:"newTabIndex",descripcion:"El contador actual para agregar la Key al archivo nuevo (abierto o creado).",tipo:"N\xfamero"},{key:"2",atributo:"files",descripcion:"El arreglo que contiene los archivos en uso.",tipo:"Array"},{key:"3",atributo:"currentFile",descripcion:"La key correspondiente al archivo actual (el que se est\xe1 visualizando, cuando no hay archivos abiertos, este valor es null).",tipo:"String"}]},o.a.createElement(L,{title:"Atributo",dataIndex:"atributo"}),o.a.createElement(L,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(L,{title:"Tipo",dataIndex:"tipo"})),o.a.createElement(R,{level:4},'La funci\xf3n "map" .'),o.a.createElement("p",null,'La funci\xf3n "map" itera el arreglo de archivos global definido en el store.js para generar una pesta\xf1a por cada archivo en uso.'),o.a.createElement(R,{level:4},'La funci\xf3n "mapStateToProps" .'),o.a.createElement("p",null,'La funci\xf3n "mapStateToProps" es la que como dice su nombre, mapea el estado del store.js como propiedad de la clase "FileManager" (ver documentaci\xf3n de redux y react-redux para m\xe1s informaci\xf3n).'),o.a.createElement(R,{level:4},'La funci\xf3n "mapDispatchToProps" .'),o.a.createElement("p",null,'La funci\xf3n "mapDispatchToProps" es la que como dice su nombre, mapea el despacho (dispatch) de acciones (actions) que son cargadas desde "actions/[component].js" (Es esta la que despacha la acci\xf3n con el objeto con el respectivo "type" y "datos" necesarios, enviando este objeto al reducer ubicado en "store.js" que ejecuta una acci\xf3n para actualizar el estado global de la aplicaci\xf3n dependiendo del type de la acci\xf3n) como propiedad de la clase "FileManager" (ver documentaci\xf3n de redux y react-redux para m\xe1s informaci\xf3n).'),o.a.createElement(R,{level:2},'La funci\xf3n "handlerToggle" .'),o.a.createElement(j.a,{dataSource:[{key:"1",parametro:"activeKey",descripcion:"La key correspondiente al archivo que se mostrar\xe1 (pesta\xf1a).",tipo:"String"}]},o.a.createElement(L,{title:"Parametro",dataIndex:"parametro"}),o.a.createElement(L,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(L,{title:"Tipo",dataIndex:"tipo"})),o.a.createElement(R,{level:2},'La funci\xf3n "handlerEdit" .'),o.a.createElement(j.a,{dataSource:[{key:"1",parametro:"targetKey",descripcion:"La key correspondiente al archivo en el que se ejecutar\xe1 la acci\xf3n.",tipo:"String"},{key:"2",parametro:"action",descripcion:"acci\xf3n devuelta por el componenete de ant design (add, remove, etc)",tipo:"String"}]},o.a.createElement(L,{title:"Parametro",dataIndex:"parametro"}),o.a.createElement(L,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(L,{title:"Tipo",dataIndex:"tipo"})),o.a.createElement(R,{level:2},'La funci\xf3n "handlerChangeName" .'),o.a.createElement(j.a,{dataSource:[{key:"1",parametro:"newName",descripcion:"Nuevo nombre para el archivo (obtenido al editar el texto de la pesta\xf1a del archivo en cuesti\xf3n).",tipo:"String"},{key:"2",parametro:"key",descripcion:"La key correspondiente al archivo correspondiente.",tipo:"String"},{key:"3",parametro:"indx",descripcion:"El \xedndice del archivo en el arreglo de archivos.",tipo:"N\xfamero"},{key:"4",parametro:"tab",descripcion:"El objeto FileManager en s\xed, para actualizar la interfaz al cambiar el nombre.",tipo:"Component"}]},o.a.createElement(L,{title:"Parametro",dataIndex:"parametro"}),o.a.createElement(L,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(L,{title:"Tipo",dataIndex:"tipo"})),o.a.createElement(R,{level:2},'La funci\xf3n "showConfirm" .'),o.a.createElement(j.a,{dataSource:[{key:"1",parametro:"e",descripcion:"evento.",tipo:"evento"},{key:"2",parametro:"key",descripcion:"La key correspondiente al archivo correspondiente.",tipo:"String"},{key:"3",parametro:"files",descripcion:"El arreglo que contiene los archivos en uso.",tipo:"Array"}]},o.a.createElement(L,{title:"Parametro",dataIndex:"parametro"}),o.a.createElement(L,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(L,{title:"Tipo",dataIndex:"tipo"})))},z=u.a.Paragraph,B=u.a.Title,W=j.a.Column,N={title:"Cargador de archivos",content:o.a.createElement("div",null,o.a.createElement(B,{level:2},'El componenete "DropZoneFile".'),o.a.createElement(b.a,{language:"javascript",style:k.a},o.a.createElement(z,{copyable:!0},"import React, { Component } from 'react'\nimport { connect } from 'react-redux';\nimport { openFile } from '../actions/DropZoneFile';\nimport { toggleOpenFileDialog } from '../actions/home';\nimport { feedBackMessage } from '../actions/others';\nimport { Icon, message } from 'antd';\nimport './DropZoneFile.css'\nclass Dropzone extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = { hover: false };\n\t\tthis.fileInputRef = React.createRef();\n\t\tthis.openFileDialog = this.openFileDialog.bind(this);\n\t\tthis.onFilesAdded = this.onFilesAdded.bind(this);\n\t\tthis.onDragOver = this.onDragOver.bind(this);\n\t\tthis.onDragLeave = this.onDragLeave.bind(this);\n\t\tthis.onDrop = this.onDrop.bind(this)\n\t}\n\topenFileDialog() {\n\t\tif (this.props.disabled) return;\n\t\tthis.fileInputRef.current.click();\n\t}\n\tonFilesAdded(evt) {\n\t\tif (this.props.disabled) return;\n\t\tconst files = evt.target.files;\n\t\tconst aFiles = this.fileListToArray(files);\n\t\tif(aFiles.length > 0){\n\t\t\tthis.props.handlerAddFiles(aFiles, this.props.newTabIndex, this.props.files, this.fileInputRef);\n\t\t}\n\t}\n\tonDragOver(evt) {\n\t\tevt.preventDefault();\n\t\tif (this.props.disabled) return;\n\t\tthis.setState({ hover: true });\n\t}\n\tonDragLeave() {\n\t\tthis.setState({ hover: false });\n\t}\n\tonDrop(event) {\n\t\tevent.preventDefault();\n\t\tif (this.props.disabled) return;\n\t\tconst files = event.dataTransfer.files;\n\t\tconst aFiles = this.fileListToArray(files);\n\t\tif(aFiles.length > 0){\n\t\t\tthis.props.handlerAddFiles(aFiles, this.props.newTabIndex, this.props.files, this.fileInputRef);\n\t\t}\n\t\tthis.setState({ hover: false });\n\t}\n\tfileListToArray(list) {\n\t\tconst array = [];\n\t\tfor (var i = 0; i < list.length; i++) {\n\t\t\tarray.push(list.item(i));\n\t\t}\n\t\treturn array;\n\t}\n\trender() {\n\t\treturn (\n\t\t\t<div\n\t\t\t\tclassName={`Dropzone ${this.state.hover ? 'hover' : ''}`}\n\t\t\t\tonDragOver={this.onDragOver}\n\t\t\t\tonDragLeave={this.onDragLeave}\n\t\t\t\tonDrop={this.onDrop}\n\t\t\t\tonClick={this.openFileDialog}\n\t\t\t\tstyle={{ cursor: this.props.disabled ? 'default' : 'pointer' }}\n\t\t\t>\n\t\t\t\t<input\n\t\t\t\t\tref={this.fileInputRef}\n\t\t\t\t\tclassName='FileInput'\n\t\t\t\t\ttype='file'\n\t\t\t\t\taccept='.json, .xml, .adl'\n\t\t\t\t\tmultiple\n\t\t\t\t\tonChange={this.onFilesAdded}\n\t\t\t\t/>\n\t\t\t\t<Icon type='inbox' />\n\t\t\t\t<span>Haz click o arrastra archivos a esta \xe1rea para abrirlos</span>\n\t\t\t</div>\n\t\t)\n\t}\n}\nconst mapStateToProps = state => {\n\treturn{\n\t\tnewTabIndex: state.newTabIndex,\n\t\tfiles: state.files\n\t};\n}\nconst mapDispatchToProps = dispatch => {\n\treturn {\n\t\thandlerAddFiles(aFiles, newTabIndex, files, ref) {\n\t\t\tif (window.FileReader) {\n\t\t\taFiles.forEach(file => {\n\t\t\t\ttry {\n\t\t\t\t\tconst ext = file.name.split('.').pop();\n\t\t\t\t\tif (ext === 'adl' || ext === 'json' || ext === 'xml' ) {\n\t\t\t\t\t\tconst equalFiles = files.filter(ofile => ofile.title === file.name);\n\t\t\t\t\t\tif (equalFiles.length <= 0) {\n\t\t\t\t\t\tconst reader = new FileReader();\n\t\t\t\t\t\tconst nFile = { title: '', content: '', saved: false, key: '0' };\n\t\t\t\t\t\tnFile.key = (newTabIndex + 1).toString();\n\t\t\t\t\t\tnewTabIndex+=1;\n\t\t\t\t\t\tnFile.title = file.name;\n\t\t\t\t\t\treader.onload = (r)=>{\n\t\t\t\t\t\t\tnFile.content = r.target.result;\n\t\t\t\t\t\t\tfiles = files.concat(nFile);\n\t\t\t\t\t\t\tdispatch(openFile(files, newTabIndex));\n\t\t\t\t\t\t}\n\t\t\t\t\t\treader.readAsText(file, 'UTF-8');\n\t\t\t\t\t\tfeedBackMessage({ type: 'success', msg: 'El archivo ' + file.name + ' se carg\xf3 correctamente.'});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tfeedBackMessage({ type: 'warning', msg: 'El archivo ' + file.name + ' no se carg\xf3 debido a que ya se encuentra en uso.'});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t} catch (error) {\n\t\t\t\t\t\tfeedBackMessage({ type: 'error', msg: 'El archivo ' + file.name + ' no se pudo cargar.'});\n\t\t\t\t\t\tconsole.log(error);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tref.current.value = null;\n\t\t\t\tdispatch(toggleOpenFileDialog(false));\n\t\t\t}\n\t\t}\n\t}\n}\nexport default connect(mapStateToProps, mapDispatchToProps)(Dropzone);")),o.a.createElement(j.a,{dataSource:[{key:"1",atributo:"newTabIndex",descripcion:"El contador actual para agregar la Key al archivo nuevo (abierto o creado).",tipo:"N\xfamero"},{key:"2",atributo:"files",descripcion:"El arreglo que contiene los archivos en uso.",tipo:"Array"}]},o.a.createElement(W,{title:"Atributo",dataIndex:"atributo"}),o.a.createElement(W,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(W,{title:"Tipo",dataIndex:"tipo"})),o.a.createElement(B,{level:4},'La funci\xf3n "mapStateToProps" .'),o.a.createElement("p",null,'La funci\xf3n "mapStateToProps" es la que como dice su nombre, mapea el estado del store.js como propiedad de la clase "FileManager" (ver documentaci\xf3n de redux y react-redux para m\xe1s informaci\xf3n).'),o.a.createElement(B,{level:4},'La funci\xf3n "mapDispatchToProps" .'),o.a.createElement("p",null,'La funci\xf3n "mapDispatchToProps" es la que como dice su nombre, mapea el despacho (dispatch) de acciones (actions) que son cargadas desde "actions/[component].js" (Es esta la que despacha la acci\xf3n con el objeto con el respectivo "type" y "datos" necesarios, enviando este objeto al reducer ubicado en "store.js" que ejecuta una acci\xf3n para actualizar el estado global de la aplicaci\xf3n dependiendo del type de la acci\xf3n) como propiedad de la clase "FileManager" (ver documentaci\xf3n de redux y react-redux para m\xe1s informaci\xf3n).'),o.a.createElement(B,{level:2},'La funci\xf3n "handlerAddFiles" .'),o.a.createElement("p",null,'Esta funci\xf3n es la encargada de analizar el arreglo de los archivos seleccionados por el usuario para para luego agregarlos uno por uno al estado global de la aplicaci\xf3n (store), mediante el despacho de la acci\xf3n "openFile".'),o.a.createElement(j.a,{dataSource:[{key:"1",parametro:"aFiles",descripcion:"Arreglo de objetos json con los datos de cada archivo seleccionado para cargar.",tipo:"Array"},{key:"2",parametro:"newTabIndex",descripcion:"El contador actual para agregar la Key al archivo nuevo (abierto o creado).",tipo:"N\xfamero"},{key:"3",parametro:"files",descripcion:"El arreglo que contiene los archivos en uso.",tipo:"Array"},{key:"4",parametro:"ref",descripcion:"Referencia React al <input />.",tipo:"Referencia React"}]},o.a.createElement(W,{title:"Parametro",dataIndex:"parametro"}),o.a.createElement(W,{title:"Descripci\xf3n",dataIndex:"descripcion"}),o.a.createElement(W,{title:"Tipo",dataIndex:"tipo"})))},O=u.a.Paragraph,H=u.a.Title,J=(j.a.Column,{title:"Pagina de Inicio",content:o.a.createElement("div",null,o.a.createElement(H,{level:2},'El componenete "Home.js".'),o.a.createElement(b.a,{language:"javascript",style:k.a},o.a.createElement(O,{copyable:!0},"import React, { Component } from 'react'; \nimport { connect } from 'react-redux';\nimport { changeTitle, toggleOpenFileDialog, handlerDownload, handlerSaveAs } from '../actions/home';\nimport FileManager from './FileManager';\nimport { onEdit } from '../actions/FileManager';\nimport DropZone from './DropZoneFile';\nimport { Button, Layout, Menu, Icon, Dropdown, Modal, Row } from 'antd';\nimport './home.css';\nimport ButtonGroup from 'antd/lib/button/button-group';\nconst { SubMenu } = Menu;\nconst { Content, Footer, Sider} = Layout;\nvar Maximize=true;\nclass Home extends Component {\n\tconstructor(props){\n\t\tsuper(props);\n\t\tthis.toggle = this.toggle.bind(this);\n\t\tthis.handlerWindowClose = this.handlerWindowClose.bind(this);\n\t\tthis.handlerWindowMinimize = this.handlerWindowMinimize.bind(this);\n\t\tthis.handlerWindowMaximize = this.handlerWindowMaximize.bind(this);\n\t\tthis.handlerWindowRestore = this.handlerWindowRestore.bind(this);\n\t\tthis.state = {collapsed:false};\n\t\tthis.MenuFile = this.MenuFile.bind(this);\n\t\tthis.MenuHelp = this.MenuHelp.bind(this);\n\t\tthis.MenuEdit = this.MenuEdit.bind(this);\n\t\tthis.MenuSelection = this.MenuSelection.bind(this);\n\t}\n\tMenuFile() {\n\t\treturn(<Menu theme='light'>\n\t\t\t<Menu.Item key='nwfile' onClick={this.props.handlerAdd}><Icon type='file' /> Nuevo Archivo</Menu.Item>\n\t\t\t<Menu.Item key='opfile' onClick={() => this.props.handlerDialogOpenFile(true)}>\n\t\t\t\t<Icon type='upload' /> Abrir archivo\n\t\t\t</Menu.Item>\n\t\t\t<Menu.Item key='svsave' onClick={()=>{this.props.handlerDownloadFile(this.props.electron.ipcRenderer, this.props.currentFile, this.props.files)}}>\n\t\t\t\t<Icon type='download' /> Guardar Archivo\n\t\t\t</Menu.Item>\n\t\t\t<Menu.Item key='svsaveas' onClick={()=>{this.props.handlerSaveAsFile(this.props.electron.ipcRenderer, this.props.currentFile, this.props.files)}}>\n\t\t\t\t<Icon type='download' /> Guardar Como...\n\t\t\t</Menu.Item>\n\t\t\t<Menu.Item key='quit' onClick={this.handlerWindowClose}>Salir</Menu.Item>\n\t\t</Menu>);\n\t}\n\tMenuEdit(){\n\t\treturn(<Menu theme='light'>\n\t\t\t<Menu.Item key='undo'>Deshacer</Menu.Item>\n\t\t\t<Menu.Item key='redo'>Rehacer</Menu.Item>\n\t\t\t<Menu.Item key='cut'>Cortar</Menu.Item>\n\t\t\t<Menu.Item key='copy'>Copiar</Menu.Item>\n\t\t\t<Menu.Item key='paste'>Pegar</Menu.Item>\n\t\t</Menu>);\n\t}\n\tMenuSelection(){\n\t\treturn(<Menu theme='light'>\n\t\t\t<Menu.Item key='slc'>Seleccionar todo</Menu.Item>\n\t\t</Menu>);\n\t}\n\tMenuHelp(){\n\t\treturn(<Menu theme='light'>\n\t\t\t<Menu.Item key='docu'>Documentation</Menu.Item>\n\t\t\t<Menu.Item key='about'>Acerca de Editor de Arquetipos</Menu.Item>\n\t\t</Menu>);\n\t}\n\thandlerWindowMinimize(event) {\n\t\tevent.preventDefault();\n\t\tconst { ipcRenderer } = this.props.electron;\n\t\tipcRenderer.send('mainWindow:minimize');\n\t\tevent.stopPropagation();\n\t}\n\thandlerWindowClose(event) {\n\t\tif (event.key && event.key !== 'quit') {\n\t\t\tevent.preventDefault();\n\t\t\tevent.stopPropagation();\n\t\t}\n\t\tconst { ipcRenderer } = this.props.electron;\n\t\tipcRenderer.send('mainWindow:close');\n\t}\n\thandlerWindowMaximize(event) {\n\t\tevent.preventDefault();\n\t\tconst { ipcRenderer } = this.props.electron;\n\t\tipcRenderer.send('mainWindow:maximize');\n\t\tif(Maximize===true){\n\t\t\tMaximize=false;\n\t\t\tconsole.log(Maximize);\n\t\t}\n\t\tevent.stopPropagation();\n\t}\n\thandlerWindowRestore(event) {\n\t\tevent.preventDefault();\n\t\tconst { ipcRenderer } = this.props.electron;\n\t\tipcRenderer.send('mainWindow:restore');\n\t\tif(Maximize===false){\n\t\t\tMaximize=true;\n\t\t\tconsole.log(Maximize);\n\t\t}\n\t\tevent.stopPropagation();\n\t}\n\ttoggle() {\n\t\tthis.setState(state => ({ collapse: !state.collapse }));\n\t}\n\trender(){\n\t\treturn (\n\t\t\t<div >\n\t\t\t\t<Modal\n\t\t\t\t\ttitle='Abrir Archivo'\n\t\t\t\t\tcentered\n\t\t\t\t\tvisible={this.props.dialogOpenFile}\n\t\t\t\t\tonOk={() => this.props.handlerDialogOpenFile(false)}\n\t\t\t\t\tonCancel={() => this.props.handlerDialogOpenFile(false)}\n\t\t\t\t>\n\t\t\t\t\thist<DropZone />\n\t\t\t\t</Modal>\n\t\t\t\t<Layout id='baraction' >\n\t\t\t\t\t<Row className='nav-bar'>\n\t\t\t\t\t\t<ButtonGroup id='nomove1'>\n\t\t\t\t\t\t\t<Icon type='fire' />\n\t\t\t\t\t\t\t<Dropdown overlay={ this.MenuFile } trigger={['click']}>\n\t\t\t\t\t\t\t\t<Button type='link' ghost>\n\t\t\t\t\t\t\t\t\tArchivo\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t\t\t<Dropdown overlay={ this.MenuEdit } trigger={['click']}>\n\t\t\t\t\t\t\t\t<Button type='link' ghost>\n\t\t\t\t\t\t\t\t\tEditar\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t\t\t<Dropdown overlay={ this.MenuSelection } trigger={['click']}>\n\t\t\t\t\t\t\t\t<Button type='link' ghost>\n\t\t\t\t\t\t\t\t\tSeleccion\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t\t\t<Dropdown overlay={ this.MenuHelp} trigger={['click']}>\n\t\t\t\t\t\t\t\t<Button type='link' ghost>\n\t\t\t\t\t\t\t\t\tAyuda\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t\t</ButtonGroup>\n\t\t\t\t\t\t<ButtonGroup id='buttongroup'>\n\t\t\t\t\t\t\t<Button type='link' ghost  onClick={this.handlerWindowMinimize}>\n\t\t\t\t\t\t\t\t<svg aria-hidden='true' version='1.1' width='10' height='10'>\n\t\t\t\t\t\t\t\t<path fill='currentColor' d='M 0,5 10,5 10,6 0,6 Z' />\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t{ Maximize===true ?  (\n\t\t\t\t\t\t\t\t<Button type='link' ghost onClick={this.handlerWindowMaximize}>\n\t\t\t\t\t\t\t\t\t\u2750\n\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t) : (\n\t\t\t\t\t\t\t<Button type='link' ghost onClick={this.handlerWindowRestore} >\n\t\t\t\t\t\t\t\t\u2750\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t<Button type='danger' onClick={this.handlerWindowClose}>\n\t\t\t\t\t\t\t\tx\n\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t</ButtonGroup>\n\t\t\t\t\t</Row>\n\t\t\t\t</Layout>\n\t\t\t\t<Layout>\n\t\t\t\t\t<Sider collapsible onClick={this.toggle} style={{ minHeight: '100vh' }}>\n\t\t\t\t\t\t<Menu\n\t\t\t\t\t\t\ttheme='dark'\n\t\t\t\t\t\t\tmode='inline'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SubMenu\n\t\t\t\t\t\t\t\tkey='cap1'\n\t\t\t\t\t\t\t\ttitle={\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<Icon type='folder' />\n\t\t\t\t\t\t\t\t\t\t<span>Carpeta 1</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<Menu.Item key='1'>Archetype 1</Menu.Item>\n\t\t\t\t\t\t\t\t<Menu.Item key='2'>Archetype 2</Menu.Item>\n\t\t\t\t\t\t\t\t<Menu.Item key='3'>Archetype 3</Menu.Item>\n\t\t\t\t\t\t\t\t<Menu.Item key='4'>Archetype 4</Menu.Item>\n\t\t\t\t\t\t\t</SubMenu>\n\t\t\t\t\t\t\t<SubMenu\n\t\t\t\t\t\t\t\tkey='cap2'\n\t\t\t\t\t\t\t\ttitle={\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<Icon type='folder' />\n\t\t\t\t\t\t\t\t\t\t<span>Carpeta 2</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<Menu.Item key='5'>Archetype 1</Menu.Item>\n\t\t\t\t\t\t\t\t<Menu.Item key='6'>Archetype 2</Menu.Item>\n\t\t\t\t\t\t\t\t<Menu.Item key='7'>Archetype 3</Menu.Item>\n\t\t\t\t\t\t\t\t<Menu.Item key='8'>Archetype 4</Menu.Item>\n\t\t\t\t\t\t\t</SubMenu>\n\t\t\t\t\t\t\t<SubMenu\n\t\t\t\t\t\t\t\tkey='Blocks'\n\t\t\t\t\t\t\t\ttitle={\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<Icon type='block' />\n\t\t\t\t\t\t\t\t\t\t<span>Bloques</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<Menu.Item key='block1'>Bloque1</Menu.Item>\n\t\t\t\t\t\t\t</SubMenu>\n\t\t\t\t\t\t</Menu>\n\t\t\t\t\t</Sider>\n\t\t\t\t\t<Layout>\n\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t<Layout>\n\t\t\t\t\t\t\t\t<FileManager />\n\t\t\t\t\t\t\t</Layout>\n\t\t\t\t\t\t</Content>\n\t\t\t\t\t\t<Footer style={{ textAlign: 'center' }}>\n\t\t\t\t\t\t\tArchetypes \xa92019 Created by WorkOrWate\n\t\t\t\t\t\t</Footer>\n\t\t\t\t\t</Layout>\n\t\t\t\t</Layout>\n\t\t\t</div>\n\t\t);\n\t}\n}\nconst mapStateToProps = state => {\n\treturn {\n\t\ttitle: state.title,\n\t\tdialogOpenFile: state.dialogOpenFile,\n\t\tcurrentFile: state.currentFile,\n\t\tfiles: state.files,\n\t\telectron: state.electron\n\t};\n}\nconst mapDispatchToProps = dispatch => {\n\treturn {\n\t\thandlerAdd(){\n\t\t\tdispatch(onEdit('add'));\n\t\t},\n\t\thandlerChangeTitle(newtitle) {\n\t\t\tdispatch(changeTitle(newtitle));\n\t\t},\n\t\thandlerDialogOpenFile(modalState) {\n\t\t\tdispatch(toggleOpenFileDialog(modalState));\n\t\t},\n\t\thandlerDownloadFile(ipc, file, files) {\n\t\t\thandlerDownload(ipc, file, files)\n\t\t},\n\t\thandlerSaveAsFile(ipc, file, files) {\n\t\t\thandlerSaveAs(ipc, file, files)\n\t\t}\n\t}\n}\nnexport default connect(mapStateToProps, mapDispatchToProps)(Home);")),o.a.createElement(H,{level:4},'La funci\xf3n "toggle" .'),o.a.createElement("p",null,'Esta funci\xf3n se encarga de expandir el contenido de los Sub Menu".'),o.a.createElement(H,{level:4},'Las funcines "Menu" .'),o.a.createElement("p",null,'Estas funciones son las que contienen nuestros menus de archivos, con las que podremos abrir, cargar, guardar, etc".'))}),K=u.a.Paragraph,G=u.a.Title,Z=(j.a.Column,{title:"La Aplicaci\xf3n React",content:o.a.createElement("div",null,o.a.createElement(G,{level:2},'El componenete "App.js".'),o.a.createElement(b.a,{language:"javascript",style:k.a},o.a.createElement(K,{copyable:!0},"import React, { Component } from 'react';\nimport { BrowserRouter, Route } from 'react-router-dom';\nimport { connect } from 'react-redux';\nimport Home from './Home';\nconst { electron } = window;\n//import { DatePicker } from 'antd';\nconst About = () => <h2>About</h2>;\nclass App extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\tisMaximized:false,\n\t\t} \n\t}\n\tcomponentWillMount(){\n\t\tthis.props.setElectron(electron);\n\t\tconst { ipcRenderer } = electron;\n\t\tipcRenderer.on('mainWindow:isMaximized', (event, isMaximized) => {\n\t\t\tthis.setState({ isMaximized });\n\t\t});\n\t\tipcRenderer.send('mainWindow:isMaximized');\n\t}\n\trender(){\n\t\treturn (\n\t\t\t<BrowserRouter>\n\t\t\t\t<Route exact path='/' component={ Home } />\n\t\t\t\t<Route path='/about' component={ About } />\n\t\t\t</BrowserRouter>\n\t\t);\n\t}\n}\nconst mapStateToProps = state => {\n\treturn {\n\t\tfiles: state.files,\n\t\telectron: state.electron\n\t};\n}\nconst mapDispatchToProps = dispatch => {\n\treturn {\n\t\tsetElectron(electron) {\n\t\t\tdispatch({\n\t\t\ttype: 'setElectron',\n\t\t\telectron\n\t\t\t});\n\t\t}\n\t}\n}\nexport default connect(mapStateToProps, mapDispatchToProps)(App);")),o.a.createElement(G,{level:4},'La funci\xf3n "mapStateToProps" .'),o.a.createElement("p",null,'La funci\xf3n "mapStateToProps" es la que como dice su nombre, mapea el estado del store.js.'),o.a.createElement(G,{level:4},'La funci\xf3n "mapDispatchToProps" .'),o.a.createElement("p",null,'La funci\xf3n "mapDispatchToProps" es la que como dice su nombre mapea el despacho (dispatch) de acciones (actions), Esta funci\xf3n es la encargada de que al momento de que se comienze a renderizar la aplicaci\xf3n se setea el electron en la store .'),o.a.createElement(G,{level:4},'La funci\xf3n "componentWillMount" .'),o.a.createElement("p",null,"Nos ayuda a enviar mensajes sincr\xf3nicos y asincr\xf3nicos desde el proceso de renderizado(p\xe1gina web) al proceso principal, como controlar el estado al momento de tener nuestra ventana de la app maximizada."))}),U=(n(527),n(528),u.a.Title),$=h.a.SubMenu,Y=g.a.Header,Q=g.a.Content,V=g.a.Sider,X=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).toggleCollapsed=function(){n.setState({collapsed:!n.state.collapsed})},n.toggleContent=function(t){console.log(t.item.props.children.length),2===t.item.props.children.length?"Comenzando"===t.item.props.children[1].props.children&&n.setState({content:A}):"Aplicaci\xf3n Web"===t.item.props.children?n.setState({content:I}):"Aplicaci\xf3n Desktop"===t.item.props.children?n.setState({content:F}):"Administrador de Archivos"===t.item.props.children?n.setState({content:q}):"Cargador de archivos"===t.item.props.children?n.setState({content:N}):"Homepage"===t.item.props.children?n.setState({content:J}):"App"===t.item.props.children&&n.setState({content:Z})},n.state={collapsed:!1,content:A},n.toggleContent=n.toggleContent.bind(Object(p.a)(n)),n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement(V,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.toggleCollapsed,className:"side-panel"},o.a.createElement("div",{className:"logo"}),o.a.createElement(h.a,{defaultSelectedKeys:["1"],mode:"inline",theme:"dark"},o.a.createElement(h.a.Item,{key:"1",onClick:this.toggleContent},o.a.createElement(E.a,{type:"pie-chart"}),o.a.createElement("span",null,"Comenzando")),o.a.createElement($,{key:"sub1",title:o.a.createElement("span",null,o.a.createElement(E.a,{type:"mail"}),o.a.createElement("span",null,"Infraestructura"))},o.a.createElement(h.a.Item,{key:"2",onClick:this.toggleContent},"Aplicaci\xf3n Web"),o.a.createElement(h.a.Item,{key:"3",onClick:this.toggleContent},"Aplicaci\xf3n Desktop")),o.a.createElement($,{key:"sub2",title:o.a.createElement("span",null,o.a.createElement(E.a,{type:"mail"}),o.a.createElement("span",null,"Componentes"))},o.a.createElement(h.a.Item,{key:"5",onClick:this.toggleContent},"Administrador de Archivos"),o.a.createElement(h.a.Item,{key:"6",onClick:this.toggleContent},"Cargador de archivos"),o.a.createElement(h.a.Item,{key:"7",onClick:this.toggleContent},"Homepage"),o.a.createElement(h.a.Item,{key:"8",onClick:this.toggleContent},"App")))),o.a.createElement(g.a,null,o.a.createElement(Y,{style:{background:"#fff",padding:0}},o.a.createElement(v.a,null,o.a.createElement(f.a,{span:2},o.a.createElement(E.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggleCollapsed})),o.a.createElement(f.a,{span:22,className:"menu-bar"},o.a.createElement(h.a,{theme:"light",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px"}},o.a.createElement(h.a.Item,{kay:"1",disabled:!0},o.a.createElement(y.a.Search,{className:"search",placeholder:"input search text",style:{width:200},onSearch:function(t){return console.log(t)}})),o.a.createElement(h.a.Item,{key:"2"},"nav 2"),o.a.createElement(h.a.Item,{key:"3"},"nav 3"))))),o.a.createElement(Q,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},o.a.createElement(U,{style:{textAlign:"center"}},this.state.content.title),this.state.content.content))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[182,1,2]]]);
//# sourceMappingURL=main.43187713.chunk.js.map