import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTitle, toggleOpenFileDialog, handlerDownload, handlerSaveAs, openDbArchetype } from '../actions/home';
import FileManager from './FileManager';
import { onEdit } from '../actions/FileManager';
import DropZone from './DropZoneFile';
import { Button, Layout, Menu, Icon, Dropdown, Modal, Row, message } from 'antd';
import './home.css';
import ButtonGroup from 'antd/lib/button/button-group';
import axios from 'axios';
import { feedBackMessage } from '../actions/others';
const { SubMenu } = Menu;
const { Content, Footer, Sider} = Layout;
var Maximize=true;


class Home extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handlerWindowClose = this.handlerWindowClose.bind(this);
        this.handlerWindowMinimize = this.handlerWindowMinimize.bind(this);
        this.handlerWindowMaximize = this.handlerWindowMaximize.bind(this);
        this.handlerWindowRestore = this.handlerWindowRestore.bind(this);
        this.state = {collapsed:false};
        this.MenuFile = this.MenuFile.bind(this);
        this.MenuHelp = this.MenuHelp.bind(this);
        this.MenuEdit = this.MenuEdit.bind(this);
        this.MenuSelection = this.MenuSelection.bind(this);
    }
    MenuFile() {
        return(<Menu theme="light">
            <Menu.Item key="nwfile" onClick={this.props.handlerAdd}><Icon type="file" /> Nuevo Archivo</Menu.Item>
            <Menu.Item key="opfile" onClick={() => this.props.handlerDialogOpenFile(true)}>
                <Icon type="upload" /> Abrir archivo
            </Menu.Item>
            <Menu.Item key="svsave" onClick={()=>{this.props.handlerDownloadFile(this.props.electron.ipcRenderer, this.props.currentFile, this.props.files)}}>
                <Icon type="download" /> Guardar Archivo
            </Menu.Item>
            <Menu.Item key="svsaveas" onClick={()=>{this.props.handlerSaveAsFile(this.props.electron.ipcRenderer, this.props.currentFile, this.props.files)}}>
                <Icon type="download" /> Guardar Como...
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="saveInDB" onClick={(e)=>{this.props.handlerSaveInDB(this.props.currentFile, this.props.files);}}>
                <Icon type="database" /> Guardar actual en Base de datos
            </Menu.Item>
            <Menu.Item key="saveAllInDB" onClick={(e)=>{this.props.handlerSaveAllInDB(this.props.files);}}>
                <Icon type="database" /> Guardar todos en Base de datos
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="quit" onClick={this.handlerWindowClose}>Salir</Menu.Item>
        </Menu>);
    }
    MenuEdit(){
        return(<Menu theme="light">
            <Menu.Item key="undo">Deshacer</Menu.Item>
            <Menu.Item key="redo">Rehacer</Menu.Item>
            <Menu.Item key="cut">Cortar</Menu.Item>
            <Menu.Item key="copy">Copiar</Menu.Item>
            <Menu.Item key="paste">Pegar</Menu.Item>
        </Menu>);
    }
    MenuSelection(){
        return(<Menu theme="light">
            <Menu.Item key="slc">Seleccionar todo</Menu.Item>
        </Menu>);
    }
    MenuHelp(){
        return(<Menu theme="light">
            <Menu.Item key="docu">Documentation</Menu.Item>
            <Menu.Item key="about">Acerca de Editor de Arquetipos</Menu.Item>
        </Menu>);
    }
    
    handlerWindowMinimize(event) {
        event.preventDefault();
        const { ipcRenderer } = this.props.electron;
        ipcRenderer.send('mainWindow:minimize');
        event.stopPropagation();
    }
    handlerWindowClose(event) {
        if (event.key && event.key !== 'quit') {
            event.preventDefault();
            event.stopPropagation();
        }
        const { ipcRenderer } = this.props.electron;
        ipcRenderer.send('mainWindow:close');
    }
    handlerWindowMaximize(event) {
        event.preventDefault();
        const { ipcRenderer } = this.props.electron;
        ipcRenderer.send('mainWindow:maximize');
        if(Maximize===true){
            Maximize=false;
            console.log(Maximize); 
        }
        event.stopPropagation();
    }   
    handlerWindowRestore(event) {
        event.preventDefault();
        const { ipcRenderer } = this.props.electron;
        ipcRenderer.send('mainWindow:restore');
        
        if(Maximize===false){
            Maximize=true;
            console.log(Maximize);
        }
        event.stopPropagation();
        
    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    componentWillMount(){
        this.props.getArchetypes();
    }
    render(){
        return (
            <div >
                <Modal
                    title="Abrir Archivo"
                    centered
                    visible={this.props.dialogOpenFile}
                    onOk={() => this.props.handlerDialogOpenFile(false)}
                    onCancel={() => this.props.handlerDialogOpenFile(false)}
                >
                    <DropZone />
                </Modal>
                <Layout id="baraction" >
                    <Row className="nav-bar">
                        <ButtonGroup id="nomove1">
                            <Icon type="fire" />
                            <Dropdown overlay={ this.MenuFile } trigger={['click']}>
                                <Button type="link" ghost>
                                    Archivo
                                </Button>
                            </Dropdown>
                            <Dropdown overlay={ this.MenuEdit } trigger={['click']}>
                                <Button type="link" ghost>
                                    Editar
                                </Button>
                            </Dropdown>
                            <Dropdown overlay={ this.MenuSelection } trigger={['click']}>
                                <Button type="link" ghost>
                                    Seleccion
                                </Button>
                            </Dropdown>
                            <Dropdown overlay={ this.MenuHelp} trigger={['click']}>
                                <Button type="link" ghost>
                                    Ayuda
                                </Button>
                            </Dropdown>
                        </ButtonGroup>
                        <ButtonGroup id="buttongroup">
                            <Button type="link" ghost  onClick={this.handlerWindowMinimize}>
                                    <svg aria-hidden="true" version="1.1" width="10" height="10">
                                    <path fill="currentColor" d="M 0,5 10,5 10,6 0,6 Z" />
                                    </svg>
                            </Button>
                            { Maximize===true ?  (
                                <Button type="link" ghost onClick={this.handlerWindowMaximize}>
                                    ❐
                                </Button>
                                 
                            ) : (
                                <Button type="link" ghost onClick={this.handlerWindowRestore} >
                                ❐
                                </Button>
                            )}
                            
                            <Button type="danger" onClick={this.handlerWindowClose}>
                                x
                            </Button>
                        </ButtonGroup>
                    </Row>
                </Layout>
                <Layout>
                    <Sider collapsible onClick={this.toggle} style={{ minHeight: '100vh' }}>
                        <Menu
                            theme="dark"
                            mode="inline"
                        >
                            <SubMenu
                                key="cap1"
                                title={
                                    <span>
                                        <Icon type="folder" />
                                        <span>Arquetipos</span>
                                    </span>
                                }
                            >
                                <Menu.Item onClick={this.props.getArchetypes}>
                                    <Icon type="reload" /> Actualizar Lista
                                </Menu.Item>
                                {
                                    this.props.DBArchetypes.map((archetype, indx)=>(
                                        <Menu.Item key={ indx } onClick={(e)=>{this.props.handlerDBArchetypeClick(e, this.props.DBArchetypes);}}>{archetype.archetype_id.value}</Menu.Item>
                                    ))
                                }
                            </SubMenu>
                            <SubMenu
                                key="Blocks"
                                title={
                                <span>
                                    <Icon type="block" />
                                    <span>Bloques</span>
                                </span>
                                }
                            >
                                <Menu.Item key="block1">Bloque1</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <Layout>
                                <FileManager />
                            </Layout>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Archetypes ©2019 Created by WorkOrWate
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.title,
        dialogOpenFile: state.dialogOpenFile,
        currentFile: state.currentFile,
        files: state.files,
        electron: state.electron,
        DBArchetypes: state.DBArchetypes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handlerAdd(){
            dispatch(onEdit('add'));
        },
        handlerChangeTitle(newtitle) {
            dispatch(changeTitle(newtitle));
        },
        handlerDialogOpenFile(modalState) {
            dispatch(toggleOpenFileDialog(modalState));
        },
        handlerDownloadFile(ipc, file, files) {
            handlerDownload(ipc, file, files)
        },
        handlerSaveAsFile(ipc, file, files) {
            handlerSaveAs(ipc, file, files)
        },
        handlerSaveInDB(file, files){
            const fileTarget = files.filter(ofile => ofile.key === file)[0];
            if(navigator.onLine){
                if(fileTarget._id === '') {
                    axios.post('http://localhost:4000/api/archetype/', fileTarget.content, {
                        headers: {'Access-Control-Allow-Origin': '*'}
                    })
                    .then(response => {
                        console.log(response.data);
                        if(response.data.success){
                            fileTarget._id = response.data._id;
                            dispatch({
                                type: "updateFile",
                                file: fileTarget
                            });
                            feedBackMessage({ type: "success", msg: "El arquetipo se ha subido correctamente."});
                            this.getArchetypes();
                        } else {
                            feedBackMessage({ type: "error", msg: "Ya existe un arquetipo con ese nombre, por favor trabaja con el arquetipo encontrandolo en la lista."});
                        }
                        
                    })
                    .catch(e => {
                        feedBackMessage({ type: "error", msg: "Ha ocurrido un error al intentar guardar el arquetipo, comprueba tu conexión a internet."});
                        console.log(e);
                    });
                } else if (fileTarget._id !== '') {
                    axios.put('http://localhost:4000/api/archetype/', { _id : fileTarget._id, data: fileTarget.content})
                    .then(response => {
                        console.log(response.data);
                        feedBackMessage({ type: "success", msg: "El arquetipo se ha actualizado correctamente."});
                        this.getArchetypes();
                    })
                    .catch(e => {
                        feedBackMessage({ type: "error", msg: "Ha ocurrido un error al intentar guardar el arquetipo, comprueba tu conexión a internet."});
                        console.log(e);
                    });
                }
            }else{
                feedBackMessage({ type: "error", msg: "Al parecer no tienes conexión a internet."});
            }
            
            
        },
        handlerSaveAllInDB(files){
            files.map((file,  indx)=>{
                if(navigator.onLine){
                    if(file._id === '') {
                        axios.post('http://localhost:4000/api/archetype/', file.content, {
                            headers: {'Access-Control-Allow-Origin': '*'}
                        })
                        .then(response => {
                            console.log(response.data);
                            if(response.data.success){
                                file._id = response.data._id;
                                dispatch({
                                    type: "updateFile",
                                    file
                                });
                                feedBackMessage({ type: "success", msg: "El arquetipo se ha subido correctamente."});
                                this.getArchetypes();
                            } else {
                                feedBackMessage({ type: "error", msg: "Ya existe un arquetipo con ese nombre, por favor trabaja con el arquetipo encontrandolo en la lista."});
                            }
                        })
                        .catch(e => {
                            feedBackMessage({ type: "error", msg: "Ha ocurrido un error al intentar guardar el arquetipo, comprueba tu conexión a internet."});
                            console.log(e);
                        });
                    } else if (file._id !== '') {
                        axios.put('http://localhost:4000/api/archetype/', { _id : file._id, data: file.content})
                        .then(response => {
                            console.log(response.data);
                            feedBackMessage({ type: "success", msg: "El arquetipo se ha actualizado correctamente."});
                            this.getArchetypes();
                        })
                        .catch(e => {
                            feedBackMessage({ type: "error", msg: "Ha ocurrido un error al intentar guardar el arquetipo, comprueba tu conexión a internet."});
                            console.log(e);
                        });
                    }
                } else {
                    feedBackMessage({ type: "error", msg: "Al parecer no tienes conexión a internet."});
                }
                
            });
        },
        getArchetypes(){
            if(navigator.onLine){
                return axios.get('http://localhost:4000/api/archetype/', {
                    headers: {'Access-Control-Allow-Origin': '*'}
                })
                .then(response => {
                    dispatch({
                        type: 'updateDBArchetypesVariable',
                        DBArchetypes: response.data
                    });
                })
                .catch(e => {
                    feedBackMessage({ type: "error", msg: "Ha ocurrido un error al intentar contactar al servidor, comprueba tu conexión a internet."});
                    console.log(e);
                });
            } else {
                feedBackMessage({ type: "error", msg: "Al parecer no tienes conexión a internet."});
            }
        },
        handlerDBArchetypeClick(e, DBArchetypes){
            dispatch(openDbArchetype(DBArchetypes[parseInt(e.key)]));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);