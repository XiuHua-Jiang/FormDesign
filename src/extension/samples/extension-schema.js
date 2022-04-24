export const cardSchema = {
  type: 'card',
  category: 'container',
  icon: 'card',
  widgetList: [],
  options: {
    name: '',
    label: 'card',
    hidden: false,
    folded: false,
    showFold: true,
    cardWidth: '100%',
    shadow: 'never',
    customClass: '',
  }
}

export const alertSchema = {
  type: 'alert',
  icon: 'alert',
  formItemFlag: false,
  options: {
    name: '',
    title: 'Good things are coming...',
    type: 'primary',
    description: '',
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    marginTop: '',
    marginBottom: '',
    onClose: '',
    customClass: '',
  }
}

export const imgSchema = {
  type: 'img',
  icon: 'picture-upload-field',
  formItemFlag: false,
  options: {
    name: '',
    imgUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
    type: 'img',
    imgAlt: '',
    imgTitle: '',
    imgWidth: '100px',
    imgHeight: '100px'
  }
}