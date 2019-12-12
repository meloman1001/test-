
const blocks=[{
	id:1, 
	name: "Заголовок"
},
{
	id:2,
	name: "Заголовок"
},
{
	id:3, 
	name: "Заголовок"
},
{
	id:4, 
	name: "Заголовок"
},
{
	id:5, 
	name: "Заголовок"
},
{
	id:6, 
	name: "Заголовок"
},
{
	id:7, 
	name: "Заголовок"
},
{
	id:8, 
	name: "Заголовок"
}
]

let filterBlocks = blocks.filter(item=>{
	if((item.id % 2) != 0 )return item;
}
		)

new Vue({
 el: '#cont',
 data: {
 	mapBlocks:[],
 	width: 0
 },
  methods: {
    updateMap() {
      this.width = window.innerWidth;
      window.innerWidth > 576?this.mapBlocks = blocks:this.mapBlocks = filterBlocks;
            
    },
  },
  created() {
    window.addEventListener('resize', this.updateMap);
    this.updateMap();
  }
})
