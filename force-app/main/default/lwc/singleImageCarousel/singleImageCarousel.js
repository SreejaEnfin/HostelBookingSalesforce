import { LightningElement, api } from 'lwc';


const CARD_VISIBLE_CLASSES = 'slds_show'
const CARD_HIDDEN_CLASSES = 'slds-hide'

const DOT_VISIBLE_CLASSES = 'dot active'
const DOT_HIDDEN_CLASSES = 'dot'
export default class SingleImageCarousel extends LightningElement {


    slides = [];
    slideIndex = 1;
    @api 
    get slidesData(){
        return this.slides;
    }

    set slidesData(data){
        this.slides = data.map((item, index)=>{
            return index === 0 ? {
                ...item,
                slideIndex: index+1,
                cardClasses:CARD_VISIBLE_CLASSES,
                dotClasses: DOT_VISIBLE_CLASSES
            }:{
                ...item,
                slideIndex:index+1,
                cardClasses:CARD_HIDDEN_CLASSES,
                dotClasses:DOT_HIDDEN_CLASSES
            }
        })
    }

    currentSlide(event){
        let slideIndex = Number(event.target.dataset.id);
        this.slideSelectionHandler(slideIndex);
    }

    backSlide(){
        let slideIndex = this.slideIndex - 1;
        this.slideSelectionHandler(slideIndex);
    }

    frontSlide(){
        let slideIndex = this.slideIndex + 1;
        this.slideSelectionHandler(slideIndex);
    }

    slideSelectionHandler(id){
        if(id > this.slides.length){
            this.slideIndex = 1;
        }else if(id < 1){
            this.slideIndex = this.slides.length
        }else{
            this.slideIndex = id;
        }
        this.slides = this.slides.map(item=>{
            return this.slideIndex === item.slideIndex ? {
                ...item,
                cardClasses:CARD_VISIBLE_CLASSES,
                dotClasses: DOT_VISIBLE_CLASSES
            }:{
                ...item,
                cardClasses:CARD_HIDDEN_CLASSES,
                dotClasses:DOT_HIDDEN_CLASSES
            }
        })
    }
}