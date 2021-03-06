import Vue from 'vue'


import VueDND from 'awe-dnd'

Vue.use(VueDND)

import Login from './components/Login'
import Root from './components/Root'
import Content from './components/layout/Content'
import Row from './components/layout/Row'
import Column from './components/layout/Column'
import Table from './components/grid/Table'
import Tree from './components/grid/Tree'
import Form from './components/form/Form'

Vue.component('login', Login);
Vue.component('Root', Root);
Vue.component('Content', Content);
Vue.component('Row', Row);
Vue.component('Column', Column);
Vue.component('Grid', Table);
Vue.component('Tree', Tree);
Vue.component('Form', Form);
Vue.component('BaseForm', ()=>import('./components/form/BaseForm'));


import Input from './components/widgets/Input'
import RadioGroup from './components/widgets/RadioGroup'
import Checkbox from './components/widgets/Checkbox'
import CheckboxGroup from './components/widgets/CheckboxGroup'
import InputNumber from './components/widgets/InputNumber'
import Select from './components/widgets/Select'
import Cascader from './components/widgets/Cascader'
import Switch from './components/widgets/Switch'
import Slider from './components/widgets/Slider'
import Transfer from './components/widgets/Transfer'
import Upload from './components/widgets/Upload'
import ColorPicker from './components/widgets/ColorPicker'
import TimePicker from './components/widgets/TimePicker'
import DatePicker from './components/widgets/DatePicker'
import DateTimePicker from './components/widgets/DateTimePicker'




Vue.component('Input', Input);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Checkbox', Checkbox);
Vue.component('CheckboxGroup', CheckboxGroup);
Vue.component('InputNumber', InputNumber);
Vue.component('Select', Select);
Vue.component('Cascader', Cascader);
Vue.component('CSwitch', Switch);
Vue.component('Slider', Slider);
Vue.component('Transfer', Transfer);
Vue.component('Upload', Upload);
Vue.component('ColorPicker', ColorPicker);
Vue.component('TimePicker', TimePicker);
Vue.component('DatePicker', DatePicker);
Vue.component('DateTimePicker', DateTimePicker);
Vue.component('WangEditor', () => import('@/components/widgets/WangEditor'));
Vue.component('ItemSelect', () => import('@/components/widgets/Form/ItemSelect'));



import Avatar from './components/widgets/Avatar'
import Tag from './components/widgets/Tag'
import Link from './components/widgets/Link'
import Text from './components/widgets/Text'
import Image from './components/widgets/Image'
import Icon from './components/widgets/Icon'
import IconChoose from './components/widgets/IconChoose'


//Grid
Vue.component('Avatar', Avatar);
Vue.component('Tag', Tag);
Vue.component('Link', Link);
Vue.component('IText', Text);
Vue.component('IImage', Image);
Vue.component('Icon', Icon);
Vue.component('Boole', require('./components/widgets/Grid/Boole').default);
Vue.component('IconChoose', IconChoose);




import MenuItem from './components/layout/MenuItem'
Vue.component('MenuItem', MenuItem);



//Actions
import EditAction from './components/widgets/Actions/EditAction'
import DeleteAction from './components/widgets/Actions/DeleteAction'
import VueRouteAction from './components/widgets/Actions/VueRouteAction'
import ActionButton from './components/widgets/Actions/ActionButton'
Vue.component('EditAction', EditAction);
Vue.component('DeleteAction', DeleteAction);
Vue.component('VueRouteAction', VueRouteAction);
Vue.component('ActionButton', ActionButton);

//BatchAction
Vue.component('BatchAction',require('@/components/widgets/BatchActions/BatchAction').default)

//Tools
import GridCreateButton from './components/widgets/Tools/Create'
import ToolButton from './components/widgets/Tools/ToolButton'
Vue.component('GridCreateButton', GridCreateButton);
Vue.component('ToolButton', ToolButton);


//Widget
import Divider from './components/widgets/Divider'
Vue.component('Divider', Divider)

import Card from './components/widgets/Card'
Vue.component('Card', Card)

import Steps from './components/widgets/Steps'
Vue.component('Steps', Steps)

import Html from './components/widgets/Html'
Vue.component('Html', Html)

import Alert from './components/widgets/Alert'
Vue.component('Alert', Alert)



Vue.component('AntvLine', () => import('./components/antv/AntvLine'))

Vue.component('AntvArea', () => import('./components/antv/AntvArea'))


Vue.component('AntvStepLine', () => import('./components/antv/AntvStepLine'))


Vue.component('AntvColumn', () => import('./components/antv/AntvColumn'))

Vue.component('DialogButton', () => import('./components/widgets/DialogButton'))

Vue.component('Tooltip', () => import('./components/widgets/Tooltip'))