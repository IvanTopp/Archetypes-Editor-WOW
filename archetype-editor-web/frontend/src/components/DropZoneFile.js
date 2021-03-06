import React, { Component } from 'react'
import { connect } from 'react-redux';
import { openFile } from '../actions/DropZoneFile';
import { toggleOpenFileDialog } from '../actions/home';
import { feedBackMessage } from '../actions/others';
import { Icon, message } from 'antd';
import './DropZoneFile.css';

function xml2json(xml) {
  try {
    var obj = {};
    
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {

          if(item.attributes.code){
            obj[nodeName] = {code: item.attributes.code.value, items: xml2json(item)};
          }else if(item.attributes.language){
            obj[nodeName] = {language: item.attributes.language.value, items: xml2json(item)};
          }else{
            obj[nodeName] = xml2json(item);
          }
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
            if(item.attributes.code){
              obj[nodeName].push({code: item.attributes.code.value, items: xml2json(item)});
            }else if(item.attributes.language){
              obj[nodeName].push({language: item.attributes.language.value, items: xml2json(item)});
            }else{
              obj[nodeName].push(xml2json(item));
            }
        }
      }
    } else {
      
      if(xml.attributes.id){
        obj.value = xml.textContent;
        obj.id = xml.attributes.id.value;
      }else{
        obj= xml.textContent;
      }
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}


class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.fileInputRef = React.createRef();

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this)
  }

  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;
    const aFiles = this.fileListToArray(files);
    if(aFiles.length > 0){
        this.props.handlerAddFiles(aFiles, this.props.newTabIndex, this.props.files, this.fileInputRef);
    }
  }

  onDragOver(evt) {
    evt.preventDefault();
    if (this.props.disabled) return;
    this.setState({ hover: true });
  }

  onDragLeave() {
    this.setState({ hover: false });
  }

  onDrop(event) {
    event.preventDefault();
    if (this.props.disabled) return;
    const files = event.dataTransfer.files;
    const aFiles = this.fileListToArray(files);
    if(aFiles.length > 0){
        this.props.handlerAddFiles(aFiles, this.props.newTabIndex, this.props.files, this.fileInputRef);
    }
    this.setState({ hover: false });
  }

  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  render() {
    return (
      <div
        className={`Dropzone ${this.state.hover ? 'hover' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          accept=".json, .xml, .adl"
          multiple
          onChange={this.onFilesAdded}
        />
        <Icon type="inbox" />
        <span>Haz click o arrastra archivos a esta área para abrirlos</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        newTabIndex: state.newTabIndex,
        files: state.files
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handlerAddFiles(aFiles, newTabIndex, files, ref) {
            if (window.FileReader) {
              aFiles.forEach(file => {
                try {
                  const ext = file.name.split('.').pop();
                  if (ext === 'adl' || ext === 'json' || ext === 'xml' ) {
                    const equalFiles = files.filter(ofile => ofile.title === file.name);
                    if (equalFiles.length <= 0) {
                      const reader = new FileReader();
                      const nFile = { title: 'Nuevo archivo', content: {
                        adl_version: " ",
                        archetype_id: {value: "Nuevo archivo"},
                        concept: " ",
                        definition: {
                            attributes: [],
                            node_id: " ",
                            occurrences: {
                                lower: " ",
                                lower_included: " ",
                                lower_unbounded: " ",
                                upper: " ",
                                upper_included: " ",
                                upper_unbounded: " "
                            },
                            rm_type_name: " "
                        },
                        description: {
                            details: {
                                copyright: " ",
                                keywords: " ",
                                language: {
                                    code_string: " ",
                                    terminology_id: {
                                        value: " "
                                    }
                                },
                                misuse: " ",
                                purpose: " ",
                                use: " "
                            },
                            lifecycle_state: " ",
                            original_author: [],
                            other_contribuitors: [],
                            other_details: []
                        },
                        is_controlled: " ",
                        ontology: {
                            term_definitions: {
                                items: []
                            }
                        },
                        original_language: {
                            code_string: " ",
                            terminology_id: {
                                value: " "
                            }
                        },
                        translations: [],
                        uid: {
                            value: " "
                        }
                    }, saved: false, key: '0' ,
                    allList: [
                        {id:"Lista1",lista:[],type:"State"},
                        {id:"Lista2",lista:[],type:"Protocol"},
                        {id:"Lista3",lista:[],type:"Data"},
                        {id:"Lista4",lista:[],type:"Events"},
                        {id:"Lista5",lista:[],type:"Description"},
                        {id:"Lista6",lista:[],type:"Atributtion"},
                        {id:"Lista7",lista:[],type:"Items"}
                    ]};
                      nFile.key = (newTabIndex + 1).toString();
                      nFile.allList.forEach((list)=>{
                        list.id=list.id + nFile.key;
                      });
                      newTabIndex+=1;
                      nFile.title = file.name;
                      reader.onload = (r)=>{
                        if(ext === 'xml'){
                          var xmlDoc = null;
                          if(window.DOMParser){
                            var parser1 = new DOMParser();
                            xmlDoc = parser1.parseFromString(r.target.result, "text/xml");
                          }
                          else{
                            xmlDoc.async = false;
                            xmlDoc.loadXML(r.target.result);
                            xmlDoc = xmlDoc.loadXML;
                          }
                          var json = xml2json(xmlDoc);
                          nFile.content = json.archetype;
                          nFile.title = json.archetype.archetype_id.value;
                          nFile._id = ''
                        }
                        else{
                            nFile.content = r.target.result;
                        }
                        files = files.concat(nFile);
                        dispatch(openFile(files,newTabIndex));
                        }
                      
                      reader.readAsText(file, 'UTF-8');
                      feedBackMessage({ type: "success", msg: "El archivo " + file.name + " se cargó correctamente."});
                    } else {
                      feedBackMessage({ type: "warning", msg: "El archivo " + file.name + " no se cargó debido a que ya se encuentra en uso."});
                    }
                  }
                } catch (error) {
                  feedBackMessage({ type: "error", msg: "El archivo " + file.name + " no se pudo cargar."});
                  console.log(error);
                }
              });
              ref.current.value = null;
              dispatch(toggleOpenFileDialog(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropzone);