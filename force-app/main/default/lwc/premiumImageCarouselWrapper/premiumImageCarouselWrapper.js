import { LightningElement } from 'lwc';
import CarouselImages from '@salesforce/resourceUrl/HostelBookingImages';
export default class PremiumImageCarouselWrapper extends LightningElement {
    slides = [{
        image:`${CarouselImages}/CarouselImages/Premium001.jpg`,
        heading:'Room 1',
        desc:'Description part here'
    },
    {
        image:`${CarouselImages}/CarouselImages/Premium002.jpg`,
        heading:'Room 2',
        desc:'Description part here'
    },
    {
        image:`${CarouselImages}/CarouselImages/Premium003.jpg`,
        heading:'Room 3',
        desc:'Description part here'
    }]
}