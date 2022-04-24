# FormDesign
可视化定制表单平台

### 安装依赖
```
npm install
```

### 开发调试
```
npm run serve/dev
```

### 生产打包
```
npm run build
```

### 表单设计器 + 表单渲染器打包
```
npm run lib
```

### 表单渲染器打包
```
npm run lib-render
```

### 浏览器兼容性
Chrome（及同内核的浏览器如QQ浏览器、360浏览器等等），Edge, Firefox，Safari，IE 11

#### 1. 平台目录结构
```
├── vue.config.js                           // webpack 配置文件
├── index_template                          // html 模板
├── dist                                    // 打包文件
├── public                                  // 资源目录（静态）
├── src                                     // 源码目录
│   ├── assets                              // 公用资源目录（动态打包）
│   ├── components                          // 组件
│   │   ├── code-editor                     // ACE Editor 代码编辑器
│   │   ├── form-designer                   // 设计器
│   │   │   ├── form-widget                 // 表单配置
│   │   │   │   ├── container-widget        // 容器配置
│   │   │   │   ├── form-widget             // 字段配置
│   │   │   │   └── index.vue               // 入口
│   │   │   ├── setting-panel               // 右侧属性配置面板
│   │   │   ├── toolbar-panel               // 中间内容头部工具栏面板
│   │   │   ├── widget-panel                // 左侧配置面板
│   │   │   ├── designer.js                 // 配置
│   │   │   └── index.vue                   // 入口
│   │   ├── form-render                     // 渲染器
│   │   ├── svg-icon                        // svg
│   │   └── v-table                         // 表格
│   ├── extension                           // 扩展
│   ├── iconfont                            // 字体图标
│   ├── icons                               // svg
│   ├── lang                                // 国际化语言配置
│   ├── styles                              // 公共样式
│   └── utils                               // 工具类
├── install-render.js                       // 渲染器打包配置
└── install.js                              // 设计器，渲染器打包配置
```

#### 2. 引入并全局注册VForm组件（需安装element）
```javascript
import Vue from "vue"
import ElementUI from 'element-ui';
import VFormRender from '@/components/form/VFormRender.umd.min.js'
import '@/components/form/VFormRender.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VFormRender);
Vue.use(ElementUI);
```

#### 3. 在Vue模板中使用表单渲染器组件
```html
<template>
  <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formJson: {"widgetList":[],"formConfig":{"labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":"","functions":"","layoutType":"PC","onFormCreated":"","onFormMounted":"","onFormDataChange":""}},
        formData: {},
        optionData: {}
      }
    },
    methods: {
      submitForm() {
        this.$refs.vFormRef.getFormData().then(formData => {
          // Form Validation OK
          alert( JSON.stringify(formData) )
        }).catch(error => {
          // Form Validation failed
          this.$message.error(error)
        })
      }
    }
  }
</script>
```