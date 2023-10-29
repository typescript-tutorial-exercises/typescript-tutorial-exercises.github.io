"use strict";var AMDLoader;let _amdLoaderGlobal=this,_commonjsGlobal="object"==typeof global?global:{};!function(e){e.global=_amdLoaderGlobal;class t{get isWindows(){return this._detect(),this._isWindows}get isNode(){return this._detect(),this._isNode}get isElectronRenderer(){return this._detect(),this._isElectronRenderer}get isWebWorker(){return this._detect(),this._isWebWorker}get isElectronNodeIntegrationWebWorker(){return this._detect(),this._isElectronNodeIntegrationWebWorker}constructor(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1,this._isElectronNodeIntegrationWebWorker=!1}_detect(){this._detected||(this._detected=!0,this._isWindows=t._isWindows(),this._isNode="u">typeof module&&!!module.exports,this._isElectronRenderer="u">typeof process&&"u">typeof process.versions&&"u">typeof process.versions.electron&&"renderer"===process.type,this._isWebWorker="function"==typeof e.global.importScripts,this._isElectronNodeIntegrationWebWorker=this._isWebWorker&&"u">typeof process&&"u">typeof process.versions&&"u">typeof process.versions.electron&&"worker"===process.type)}static _isWindows(){return!!("u">typeof navigator&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0)||"u">typeof process&&"win32"===process.platform}}e.Environment=t}(AMDLoader||(AMDLoader={})),!function(e){class t{constructor(e,t,r){this.type=e,this.detail=t,this.timestamp=r}}e.LoaderEvent=t;e.LoaderEventRecorder=class r{constructor(e){this._events=[new t(1,"",e)]}record(r,i){this._events.push(new t(r,i,e.Utilities.getHighPerformanceTimestamp()))}getEvents(){return this._events}};class r{record(e,t){}getEvents(){return[]}}r.INSTANCE=new r,e.NullLoaderEventRecorder=r}(AMDLoader||(AMDLoader={})),!function(e){class t{static fileUriToFilePath(e,t){if(t=decodeURI(t).replace(/%23/g,"#"),e){if(/^file:\/\/\//.test(t))return t.substr(8);if(/^file:\/\//.test(t))return t.substr(5)}else if(/^file:\/\//.test(t))return t.substr(7);return t}static startsWith(e,t){return e.length>=t.length&&e.substr(0,t.length)===t}static endsWith(e,t){return e.length>=t.length&&e.substr(e.length-t.length)===t}static containsQueryString(e){return/^[^\#]*\?/gi.test(e)}static isAbsolutePath(e){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)}static forEachProperty(e,t){if(e){let r;for(r in e)e.hasOwnProperty(r)&&t(r,e[r])}}static isEmpty(e){let r=!0;return t.forEachProperty(e,()=>{r=!1}),r}static recursiveClone(e){if(!e||"object"!=typeof e||e instanceof RegExp||!Array.isArray(e)&&Object.getPrototypeOf(e)!==Object.prototype)return e;let r=Array.isArray(e)?[]:{};return t.forEachProperty(e,(e,i)=>{i&&"object"==typeof i?r[e]=t.recursiveClone(i):r[e]=i}),r}static generateAnonymousModule(){return"===anonymous"+t.NEXT_ANONYMOUS_ID+++"==="}static isAnonymousModule(e){return t.startsWith(e,"===anonymous")}static getHighPerformanceTimestamp(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=e.global.performance&&"function"==typeof e.global.performance.now),this.HAS_PERFORMANCE_NOW?e.global.performance.now():Date.now()}}t.NEXT_ANONYMOUS_ID=1,t.PERFORMANCE_NOW_PROBED=!1,t.HAS_PERFORMANCE_NOW=!1,e.Utilities=t}(AMDLoader||(AMDLoader={})),!function(e){function t(e){if(e instanceof Error)return e;let t=Error(e.message||String(e)||"Unknown Error");return e.stack&&(t.stack=e.stack),t}e.ensureError=t;class r{static validateConfigurationOptions(r){if("string"!=typeof(r=r||{}).baseUrl&&(r.baseUrl=""),"boolean"!=typeof r.isBuild&&(r.isBuild=!1),"object"!=typeof r.paths&&(r.paths={}),"object"!=typeof r.config&&(r.config={}),typeof r.catchError>"u"&&(r.catchError=!1),typeof r.recordStats>"u"&&(r.recordStats=!1),"string"!=typeof r.urlArgs&&(r.urlArgs=""),"function"!=typeof r.onError&&(r.onError=function(e){if("loading"===e.phase){console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}if("factory"===e.phase){console.error('The factory function of "'+e.moduleId+'" has thrown an exception'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}}),Array.isArray(r.ignoreDuplicateModules)||(r.ignoreDuplicateModules=[]),r.baseUrl.length>0&&(e.Utilities.endsWith(r.baseUrl,"/")||(r.baseUrl+="/")),"string"!=typeof r.cspNonce&&(r.cspNonce=""),typeof r.preferScriptTags>"u"&&(r.preferScriptTags=!1),r.nodeCachedData&&"object"==typeof r.nodeCachedData&&("string"!=typeof r.nodeCachedData.seed&&(r.nodeCachedData.seed="seed"),("number"!=typeof r.nodeCachedData.writeDelay||r.nodeCachedData.writeDelay<0)&&(r.nodeCachedData.writeDelay=7e3),!r.nodeCachedData.path||"string"!=typeof r.nodeCachedData.path)){let e=t(Error("INVALID cached data configuration, 'path' MUST be set"));e.phase="configuration",r.onError(e),r.nodeCachedData=void 0}return r}static mergeConfigurationOptions(t=null,i=null){let o=e.Utilities.recursiveClone(i||{});return e.Utilities.forEachProperty(t,(t,r)=>{"ignoreDuplicateModules"===t&&"u">typeof o.ignoreDuplicateModules?o.ignoreDuplicateModules=o.ignoreDuplicateModules.concat(r):"paths"===t&&"u">typeof o.paths?e.Utilities.forEachProperty(r,(e,t)=>o.paths[e]=t):"config"===t&&"u">typeof o.config?e.Utilities.forEachProperty(r,(e,t)=>o.config[e]=t):o[t]=e.Utilities.recursiveClone(r)}),r.validateConfigurationOptions(o)}}e.ConfigurationOptionsUtil=r;class i{constructor(e,t){if(this._env=e,this.options=r.mergeConfigurationOptions(t),this._createIgnoreDuplicateModulesMap(),this._createSortedPathsRules(),""===this.options.baseUrl&&this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){let e=this.options.nodeRequire.main.filename,t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));this.options.baseUrl=e.substring(0,t+1)}}_createIgnoreDuplicateModulesMap(){this.ignoreDuplicateModulesMap={};for(let e=0;e<this.options.ignoreDuplicateModules.length;e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]]=!0}_createSortedPathsRules(){this.sortedPathsRules=[],e.Utilities.forEachProperty(this.options.paths,(e,t)=>{Array.isArray(t)?this.sortedPathsRules.push({from:e,to:t}):this.sortedPathsRules.push({from:e,to:[t]})}),this.sortedPathsRules.sort((e,t)=>t.from.length-e.from.length)}cloneAndMerge(e){return new i(this._env,r.mergeConfigurationOptions(e,this.options))}getOptionsLiteral(){return this.options}_applyPaths(t){let r;for(let i=0,o=this.sortedPathsRules.length;i<o;i++)if(r=this.sortedPathsRules[i],e.Utilities.startsWith(t,r.from)){let e=[];for(let i=0,o=r.to.length;i<o;i++)e.push(r.to[i]+t.substr(r.from.length));return e}return[t]}_addUrlArgsToUrl(t){return e.Utilities.containsQueryString(t)?t+"&"+this.options.urlArgs:t+"?"+this.options.urlArgs}_addUrlArgsIfNecessaryToUrl(e){return this.options.urlArgs?this._addUrlArgsToUrl(e):e}_addUrlArgsIfNecessaryToUrls(e){if(this.options.urlArgs)for(let t=0,r=e.length;t<r;t++)e[t]=this._addUrlArgsToUrl(e[t]);return e}moduleIdToPaths(t){if(this._env.isNode&&this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(t))return this.isBuild()?["empty:"]:["node|"+t];let r=t,i;if(e.Utilities.endsWith(r,".js")||e.Utilities.isAbsolutePath(r))e.Utilities.endsWith(r,".js")||e.Utilities.containsQueryString(r)||(r+=".js"),i=[r];else{i=this._applyPaths(r);for(let t=0,r=i.length;t<r;t++)(!this.isBuild()||"empty:"!==i[t])&&(e.Utilities.isAbsolutePath(i[t])||(i[t]=this.options.baseUrl+i[t]),e.Utilities.endsWith(i[t],".js")||e.Utilities.containsQueryString(i[t])||(i[t]=i[t]+".js"))}return this._addUrlArgsIfNecessaryToUrls(i)}requireToUrl(t){let r=t;return e.Utilities.isAbsolutePath(r)||(r=this._applyPaths(r)[0],e.Utilities.isAbsolutePath(r)||(r=this.options.baseUrl+r)),this._addUrlArgsIfNecessaryToUrl(r)}isBuild(){return this.options.isBuild}shouldInvokeFactory(t){return!!(!this.options.isBuild||e.Utilities.isAnonymousModule(t)||this.options.buildForceInvokeFactory&&this.options.buildForceInvokeFactory[t])}isDuplicateMessageIgnoredFor(e){return this.ignoreDuplicateModulesMap.hasOwnProperty(e)}getConfigForModule(e){if(this.options.config)return this.options.config[e]}shouldCatchError(){return this.options.catchError}shouldRecordStats(){return this.options.recordStats}onError(e){this.options.onError(e)}}e.Configuration=i}(AMDLoader||(AMDLoader={})),!function(e){class t{constructor(e){this._env=e,this._scriptLoader=null,this._callbackMap={}}load(e,t,n,s){if(!this._scriptLoader){if(this._env.isWebWorker)this._scriptLoader=new i;else if(this._env.isElectronRenderer){let{preferScriptTags:t}=e.getConfig().getOptionsLiteral();t?this._scriptLoader=new r:this._scriptLoader=new o(this._env)}else this._env.isNode?this._scriptLoader=new o(this._env):this._scriptLoader=new r}let l={callback:n,errorback:s};if(this._callbackMap.hasOwnProperty(t)){this._callbackMap[t].push(l);return}this._callbackMap[t]=[l],this._scriptLoader.load(e,t,()=>this.triggerCallback(t),e=>this.triggerErrorback(t,e))}triggerCallback(e){let t=this._callbackMap[e];delete this._callbackMap[e];for(let e=0;e<t.length;e++)t[e].callback()}triggerErrorback(e,t){let r=this._callbackMap[e];delete this._callbackMap[e];for(let e=0;e<r.length;e++)r[e].errorback(t)}}class r{attachListeners(e,t,r){let i=()=>{e.removeEventListener("load",o),e.removeEventListener("error",n)},o=e=>{i(),t()},n=e=>{i(),r(e)};e.addEventListener("load",o),e.addEventListener("error",n)}load(t,r,i,o){if(/^node\|/.test(r)){let s=t.getConfig().getOptionsLiteral(),l=n(t.getRecorder(),s.nodeRequire||e.global.nodeRequire),d=r.split("|"),a=null;try{a=l(d[1])}catch(e){o(e);return}t.enqueueDefineAnonymousModule([],()=>a),i()}else{let e=document.createElement("script");e.setAttribute("async","async"),e.setAttribute("type","text/javascript"),this.attachListeners(e,i,o);let{trustedTypesPolicy:n}=t.getConfig().getOptionsLiteral();n&&(r=n.createScriptURL(r)),e.setAttribute("src",r);let{cspNonce:s}=t.getConfig().getOptionsLiteral();s&&e.setAttribute("nonce",s),document.getElementsByTagName("head")[0].appendChild(e)}}}class i{constructor(){this._cachedCanUseEval=null}_canUseEval(e){return null===this._cachedCanUseEval&&(this._cachedCanUseEval=function(e){let{trustedTypesPolicy:t}=e.getConfig().getOptionsLiteral();try{return(t?self.eval(t.createScript("","true")):Function("true")).call(self),!0}catch{return!1}}(e)),this._cachedCanUseEval}load(t,r,i,o){if(/^node\|/.test(r)){let s=t.getConfig().getOptionsLiteral(),l=n(t.getRecorder(),s.nodeRequire||e.global.nodeRequire),d=r.split("|"),a=null;try{a=l(d[1])}catch(e){o(e);return}t.enqueueDefineAnonymousModule([],function(){return a}),i()}else{let{trustedTypesPolicy:e}=t.getConfig().getOptionsLiteral();if(!(/^((http:)|(https:)|(file:))/.test(r)&&r.substring(0,self.origin.length)!==self.origin)&&this._canUseEval(t)){fetch(r).then(e=>{if(200!==e.status)throw Error(e.statusText);return e.text()}).then(t=>{t=`${t}
//# sourceURL=${r}`,(e?self.eval(e.createScript("",t)):Function(t)).call(self),i()}).then(void 0,o);return}try{e&&(r=e.createScriptURL(r)),importScripts(r),i()}catch(e){o(e)}}}}class o{constructor(e){this._env=e,this._didInitialize=!1,this._didPatchNodeRequire=!1}_init(e){this._didInitialize||(this._didInitialize=!0,this._fs=e("fs"),this._vm=e("vm"),this._path=e("path"),this._crypto=e("crypto"))}_initNodeRequire(e,t){let{nodeCachedData:r}=t.getConfig().getOptionsLiteral();if(!r||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;let i=this,o=e("module");o.prototype._compile=function(e,n){let s;let l=o.wrap(e.replace(/^#!.*/,"")),d=t.getRecorder(),a=i._getCachedDataPath(r,n),u={filename:n};try{let e=i._fs.readFileSync(a);s=e.slice(0,16),u.cachedData=e.slice(16),d.record(60,a)}catch{d.record(61,a)}let c=new i._vm.Script(l,u),h=c.runInThisContext(u),p=i._path.dirname(n),f=function(e){let t=e.constructor,r=function(t){return e.require(t)};return r.resolve=function(r,i){return t._resolveFilename(r,e,!1,i)},r.resolve.paths=function(r){return t._resolveLookupPaths(r,e)},r.main=process.mainModule,r.extensions=t._extensions,r.cache=t._cache,r}(this),_=[this.exports,f,this,n,p,process,_commonjsGlobal,Buffer],g=h.apply(this.exports,_);return i._handleCachedData(c,l,a,!u.cachedData,t),i._verifyCachedData(c,l,a,s,t),g}}load(t,r,i,s){let l=t.getConfig().getOptionsLiteral(),d=n(t.getRecorder(),l.nodeRequire||e.global.nodeRequire),a=l.nodeInstrumenter||function(e){return e};this._init(d),this._initNodeRequire(d,t);let u=t.getRecorder();if(/^node\|/.test(r)){let e=r.split("|"),o=null;try{o=d(e[1])}catch(e){s(e);return}t.enqueueDefineAnonymousModule([],()=>o),i()}else{r=e.Utilities.fileUriToFilePath(this._env.isWindows,r);let n=this._path.normalize(r),d=this._getElectronRendererScriptPathOrUri(n),c=!!l.nodeCachedData,h=c?this._getCachedDataPath(l.nodeCachedData,r):void 0;this._readSourceAndCachedData(n,h,u,(e,r,l,u)=>{let p;if(e){s(e);return}p=a(p=r.charCodeAt(0)===o._BOM?o._PREFIX+r.substring(1)+o._SUFFIX:o._PREFIX+r+o._SUFFIX,n);let f=this._createAndEvalScript(t,p,{filename:d,cachedData:l},i,s);this._handleCachedData(f,p,h,c&&!l,t),this._verifyCachedData(f,p,h,u,t)})}}_createAndEvalScript(t,r,i,o,n){let s=t.getRecorder();s.record(31,i.filename);let l=new this._vm.Script(r,i),d=l.runInThisContext(i),a=t.getGlobalAMDDefineFunc(),u=!1,c=function(){return u=!0,a.apply(null,arguments)};return c.amd=a.amd,d.call(e.global,t.getGlobalAMDRequireFunc(),c,i.filename,this._path.dirname(i.filename)),s.record(32,i.filename),u?o():n(Error(`Didn't receive define call in ${i.filename}!`)),l}_getElectronRendererScriptPathOrUri(e){if(!this._env.isElectronRenderer)return e;let t=e.match(/^([a-z])\:(.*)/i);return t?`file:///${(t[1].toUpperCase()+":"+t[2]).replace(/\\/g,"/")}`:`file://${e}`}_getCachedDataPath(e,t){let r=this._crypto.createHash("md5").update(t,"utf8").update(e.seed,"utf8").update(process.arch,"").digest("hex"),i=this._path.basename(t).replace(/\.js$/,"");return this._path.join(e.path,`${i}-${r}.code`)}_handleCachedData(e,t,r,i,o){e.cachedDataRejected?this._fs.unlink(r,i=>{o.getRecorder().record(62,r),this._createAndWriteCachedData(e,t,r,o),i&&o.getConfig().onError(i)}):i&&this._createAndWriteCachedData(e,t,r,o)}_createAndWriteCachedData(e,t,r,i){let o=Math.ceil(i.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),n=-1,s=0,l,d=()=>{setTimeout(()=>{l||(l=this._crypto.createHash("md5").update(t,"utf8").digest());let o=e.createCachedData();if(!(0===o.length||o.length===n||s>=5)){if(o.length<n){d();return}n=o.length,this._fs.writeFile(r,Buffer.concat([l,o]),e=>{e&&i.getConfig().onError(e),i.getRecorder().record(63,r),d()})}},o*Math.pow(4,s++))};d()}_readSourceAndCachedData(e,t,r,i){if(t){let o,n,s,l=2,d=e=>{e?i(e):0==--l&&i(void 0,o,n,s)};this._fs.readFile(e,{encoding:"utf8"},(e,t)=>{o=t,d(e)}),this._fs.readFile(t,(e,i)=>{!e&&i&&i.length>0?(s=i.slice(0,16),n=i.slice(16),r.record(60,t)):r.record(61,t),d()})}else this._fs.readFile(e,{encoding:"utf8"},i)}_verifyCachedData(e,t,r,i,o){i&&(e.cachedDataRejected||setTimeout(()=>{let e=this._crypto.createHash("md5").update(t,"utf8").digest();i.equals(e)||(o.getConfig().onError(Error(`FAILED TO VERIFY CACHED DATA, deleting stale '${r}' now, but a RESTART IS REQUIRED`)),this._fs.unlink(r,e=>{e&&o.getConfig().onError(e)}))},Math.ceil(5e3*(1+Math.random()))))}}function n(e,t){if(t.__$__isRecorded)return t;let r=function(r){e.record(33,r);try{return t(r)}finally{e.record(34,r)}};return r.__$__isRecorded=!0,r}o._BOM=65279,o._PREFIX="(function (require, define, __filename, __dirname) { ",o._SUFFIX=`
});`,e.ensureRecordedNodeRequire=n;e.createScriptLoader=function(e){return new t(e)}}(AMDLoader||(AMDLoader={})),!function(e){class t{constructor(e){let t=e.lastIndexOf("/");-1!==t?this.fromModulePath=e.substr(0,t+1):this.fromModulePath=""}static _normalizeModuleId(e){let t=e,r;for(r=/\/\.\//;r.test(t);)t=t.replace(r,"/");for(t=t.replace(/^\.\//g,""),r=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;r.test(t);)t=t.replace(r,"/");return t.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"")}resolveModule(r){let i=r;return e.Utilities.isAbsolutePath(i)||(e.Utilities.startsWith(i,"./")||e.Utilities.startsWith(i,"../"))&&(i=t._normalizeModuleId(this.fromModulePath+i)),i}}t.ROOT=new t(""),e.ModuleIdResolver=t;class r{constructor(e,t,r,i,o,n){this.id=e,this.strId=t,this.dependencies=r,this._callback=i,this._errorback=o,this.moduleIdResolver=n,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}static _safeInvokeFunction(t,r){try{return{returnedValue:t.apply(e.global,r),producedError:null}}catch(e){return{returnedValue:null,producedError:e}}}static _invokeFactory(t,r,i,o){return t.shouldInvokeFactory(r)?t.shouldCatchError()?this._safeInvokeFunction(i,o):{returnedValue:i.apply(e.global,o),producedError:null}:{returnedValue:null,producedError:null}}complete(t,i,o,n){this._isComplete=!0;let s=null;if(this._callback){if("function"==typeof this._callback){t.record(21,this.strId);let n=r._invokeFactory(i,this.strId,this._callback,o);s=n.producedError,t.record(22,this.strId),!s&&"u">typeof n.returnedValue&&(!this.exportsPassedIn||e.Utilities.isEmpty(this.exports))&&(this.exports=n.returnedValue)}else this.exports=this._callback}if(s){let t=e.ensureError(s);t.phase="factory",t.moduleId=this.strId,t.neededBy=n(this.id),this.error=t,i.onError(t)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null}onDependencyError(e){return this._isComplete=!0,this.error=e,!!this._errorback&&(this._errorback(e),!0)}isComplete(){return this._isComplete}}e.Module=r;class i{constructor(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}getMaxModuleId(){return this._nextId}getModuleId(e){let t=this._strModuleIdToIntModuleId.get(e);return typeof t>"u"&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t}getStrModuleId(e){return this._intModuleIdToStrModuleId[e]}}class o{constructor(e){this.id=e}}o.EXPORTS=new o(0),o.MODULE=new o(1),o.REQUIRE=new o(2),e.RegularDependency=o;class n{constructor(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}}e.PluginDependency=n;class s{constructor(t,r,o,n,s=0){this._env=t,this._scriptLoader=r,this._loaderAvailableTimestamp=s,this._defineFunc=o,this._requireFunc=n,this._moduleIdProvider=new i,this._config=new e.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[],this._requireFunc.moduleManager=this}reset(){return new s(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)}getGlobalAMDDefineFunc(){return this._defineFunc}getGlobalAMDRequireFunc(){return this._requireFunc}static _findRelevantLocationInStack(e,t){let r=e=>e.replace(/\\/g,"/"),i=r(e),o=t.split(/\n/);for(let e=0;e<o.length;e++){let t=o[e].match(/(.*):(\d+):(\d+)\)?$/);if(t){let e=t[1],o=t[2],n=t[3],s=Math.max(e.lastIndexOf(" ")+1,e.lastIndexOf("(")+1);if((e=r(e=e.substr(s)))===i){let e={line:parseInt(o,10),col:parseInt(n,10)};return 1===e.line&&(e.col-=53),e}}}throw Error("Could not correlate define call site for needle "+e)}getBuildInfo(){if(!this._config.isBuild())return null;let e=[],t=0;for(let r=0,i=this._modules2.length;r<i;r++){let i=this._modules2[r];if(!i)continue;let o=this._buildInfoPath[i.id]||null,n=this._buildInfoDefineStack[i.id]||null,l=this._buildInfoDependencies[i.id];e[t++]={id:i.strId,path:o,defineLocation:o&&n?s._findRelevantLocationInStack(o,n):null,dependencies:l,shim:null,exports:i.exports}}return e}getRecorder(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new e.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=e.NullLoaderEventRecorder.INSTANCE),this._recorder}getLoaderEvents(){return this.getRecorder().getEvents()}enqueueDefineAnonymousModule(e,t){if(null!==this._currentAnonymousDefineCall)throw Error("Can only have one anonymous define call per script file");let r=null;this._config.isBuild()&&(r=Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:r,dependencies:e,callback:t}}defineModule(e,i,o,n,s,l=new t(e)){let d=this._moduleIdProvider.getModuleId(e);if(this._modules2[d]){this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");return}let a=new r(d,e,this._normalizeDependencies(i,l),o,n,l);this._modules2[d]=a,this._config.isBuild()&&(this._buildInfoDefineStack[d]=s,this._buildInfoDependencies[d]=(a.dependencies||[]).map(e=>this._moduleIdProvider.getStrModuleId(e.id))),this._resolve(a)}_normalizeDependency(e,t){if("exports"===e)return o.EXPORTS;if("module"===e)return o.MODULE;if("require"===e)return o.REQUIRE;let r=e.indexOf("!");if(r>=0){let i=t.resolveModule(e.substr(0,r)),o=t.resolveModule(e.substr(r+1));return new n(this._moduleIdProvider.getModuleId(i+"!"+o),this._moduleIdProvider.getModuleId(i),o)}return new o(this._moduleIdProvider.getModuleId(t.resolveModule(e)))}_normalizeDependencies(e,t){let r=[],i=0;for(let o=0,n=e.length;o<n;o++)r[i++]=this._normalizeDependency(e[o],t);return r}_relativeRequire(t,r,i,o){if("string"==typeof r)return this.synchronousRequire(r,t);this.defineModule(e.Utilities.generateAnonymousModule(),r,i,o,null,t)}synchronousRequire(e,r=new t(e)){let i=this._normalizeDependency(e,r),o=this._modules2[i.id];if(!o)throw Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!o.isComplete())throw Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(o.error)throw o.error;return o.exports}configure(t,r){let i=this._config.shouldRecordStats();r?this._config=new e.Configuration(this._env,t):this._config=this._config.cloneAndMerge(t),this._config.shouldRecordStats()&&!i&&(this._recorder=null)}getConfig(){return this._config}_onLoad(e){if(null!==this._currentAnonymousDefineCall){let t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}}_createLoadError(t,r){let i=this._moduleIdProvider.getStrModuleId(t),o=(this._inverseDependencies2[t]||[]).map(e=>this._moduleIdProvider.getStrModuleId(e)),n=e.ensureError(r);return n.phase="loading",n.moduleId=i,n.neededBy=o,n}_onLoadError(e,t){let i=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new r(e,this._moduleIdProvider.getStrModuleId(e),[],()=>{},null,null));let o=[];for(let e=0,t=this._moduleIdProvider.getMaxModuleId();e<t;e++)o[e]=!1;let n=!1,s=[];for(s.push(e),o[e]=!0;s.length>0;){let e=s.shift(),t=this._modules2[e];t&&(n=t.onDependencyError(i)||n);let r=this._inverseDependencies2[e];if(r)for(let e=0,t=r.length;e<t;e++){let t=r[e];o[t]||(s.push(t),o[t]=!0)}}n||this._config.onError(i)}_hasDependencyPath(e,t){let r=this._modules2[e];if(!r)return!1;let i=[];for(let e=0,t=this._moduleIdProvider.getMaxModuleId();e<t;e++)i[e]=!1;let o=[];for(o.push(r),i[e]=!0;o.length>0;){let e=o.shift().dependencies;if(e)for(let r=0,n=e.length;r<n;r++){let n=e[r];if(n.id===t)return!0;let s=this._modules2[n.id];s&&!i[n.id]&&(i[n.id]=!0,o.push(s))}}return!1}_findCyclePath(e,t,r){if(e===t||50===r)return[e];let i=this._modules2[e];if(!i)return null;let o=i.dependencies;if(o)for(let i=0,n=o.length;i<n;i++){let n=this._findCyclePath(o[i].id,t,r+1);if(null!==n)return n.push(e),n}return null}_createRequire(t){let r=(e,r,i)=>this._relativeRequire(t,e,r,i);return r.toUrl=e=>this._config.requireToUrl(t.resolveModule(e)),r.getStats=()=>this.getLoaderEvents(),r.hasDependencyCycle=()=>this._hasDependencyCycle,r.config=(e,t=!1)=>{this.configure(e,t)},r.__$__nodeRequire=e.global.nodeRequire,r}_loadModule(e){if(this._modules2[e]||this._knownModules2[e])return;this._knownModules2[e]=!0;let t=this._moduleIdProvider.getStrModuleId(e),r=this._config.moduleIdToPaths(t);this._env.isNode&&(-1===t.indexOf("/")||/^@[^\/]+\/[^\/]+$/.test(t))&&r.push("node|"+t);let i=-1,o=t=>{if(++i>=r.length)this._onLoadError(e,t);else{let t=r[i],n=this.getRecorder();if(this._config.isBuild()&&"empty:"===t){this._buildInfoPath[e]=t,this.defineModule(this._moduleIdProvider.getStrModuleId(e),[],null,null,null),this._onLoad(e);return}n.record(10,t),this._scriptLoader.load(this,t,()=>{this._config.isBuild()&&(this._buildInfoPath[e]=t),n.record(11,t),this._onLoad(e)},e=>{n.record(12,t),o(e)})}};o(null)}_loadPluginDependency(e,r){if(this._modules2[r.id]||this._knownModules2[r.id])return;this._knownModules2[r.id]=!0;let i=e=>{this.defineModule(this._moduleIdProvider.getStrModuleId(r.id),[],e,null,null)};i.error=e=>{this._config.onError(this._createLoadError(r.id,e))},e.load(r.pluginParam,this._createRequire(t.ROOT),i,this._config.getOptionsLiteral())}_resolve(e){let t=e.dependencies;if(t)for(let r=0,i=t.length;r<i;r++){let i=t[r];if(i===o.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(i===o.MODULE||i===o.REQUIRE){e.unresolvedDependenciesCount--;continue}let s=this._modules2[i.id];if(s&&s.isComplete()){if(s.error){e.onDependencyError(s.error);return}e.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(i.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(i.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");let t=this._findCyclePath(i.id,e.id,0)||[];t.reverse(),t.push(i.id),console.warn(t.map(e=>this._moduleIdProvider.getStrModuleId(e)).join(` => 
`)),e.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[i.id]=this._inverseDependencies2[i.id]||[],this._inverseDependencies2[i.id].push(e.id),i instanceof n){let e=this._modules2[i.pluginId];if(e&&e.isComplete()){this._loadPluginDependency(e.exports,i);continue}let t=this._inversePluginDependencies2.get(i.pluginId);t||(t=[],this._inversePluginDependencies2.set(i.pluginId,t)),t.push(i),this._loadModule(i.pluginId);continue}this._loadModule(i.id)}0===e.unresolvedDependenciesCount&&this._onModuleComplete(e)}_onModuleComplete(e){let t=this.getRecorder();if(e.isComplete())return;let r=e.dependencies,i=[];if(r)for(let t=0,n=r.length;t<n;t++){let n=r[t];if(n===o.EXPORTS){i[t]=e.exports;continue}if(n===o.MODULE){i[t]={id:e.strId,config:()=>this._config.getConfigForModule(e.strId)};continue}if(n===o.REQUIRE){i[t]=this._createRequire(e.moduleIdResolver);continue}let s=this._modules2[n.id];if(s){i[t]=s.exports;continue}i[t]=null}e.complete(t,this._config,i,e=>(this._inverseDependencies2[e]||[]).map(e=>this._moduleIdProvider.getStrModuleId(e)));let n=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,n)for(let e=0,t=n.length;e<t;e++){let t=n[e],r=this._modules2[t];r.unresolvedDependenciesCount--,0===r.unresolvedDependenciesCount&&this._onModuleComplete(r)}let s=this._inversePluginDependencies2.get(e.id);if(s){this._inversePluginDependencies2.delete(e.id);for(let t=0,r=s.length;t<r;t++)this._loadPluginDependency(e.exports,s[t])}}}e.ModuleManager=s}(AMDLoader||(AMDLoader={})),!function(e){let t=new e.Environment,r=null,i=function(e,t,i){"string"!=typeof e&&(i=t,t=e,e=null),"object"==typeof t&&Array.isArray(t)||(i=t,t=null),t||(t=["require","exports","module"]),e?r.defineModule(e,t,i,null,null):r.enqueueDefineAnonymousModule(t,i)};i.amd={jQuery:!0};let o=function(e,t=!1){r.configure(e,t)},n=function(){if(1==arguments.length){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){o(arguments[0]);return}if("string"==typeof arguments[0])return r.synchronousRequire(arguments[0])}if((2==arguments.length||3==arguments.length)&&Array.isArray(arguments[0])){r.defineModule(e.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw Error("Unrecognized require call")};function s(){if("u">typeof e.global.require||"u">typeof require){let t=e.global.require||require;if("function"==typeof t&&"function"==typeof t.resolve){let i=e.ensureRecordedNodeRequire(r.getRecorder(),t);e.global.nodeRequire=i,n.nodeRequire=i,n.__$__nodeRequire=i}}!t.isNode||t.isElectronRenderer||t.isElectronNodeIntegrationWebWorker?(t.isElectronRenderer||(e.global.define=i),e.global.require=n):module.exports=n}n.config=o,n.getConfig=function(){return r.getConfig().getOptionsLiteral()},n.reset=function(){r=r.reset()},n.getBuildInfo=function(){return r.getBuildInfo()},n.getStats=function(){return r.getLoaderEvents()},n.define=i,e.init=s,("function"!=typeof e.global.define||!e.global.define.amd)&&(r=new e.ModuleManager(t,e.createScriptLoader(t),i,n,e.Utilities.getHighPerformanceTimestamp()),"u">typeof e.global.require&&"function"!=typeof e.global.require&&n.config(e.global.require),i.amd,typeof doNotInitLoader>"u"&&s())}(AMDLoader||(AMDLoader={}));