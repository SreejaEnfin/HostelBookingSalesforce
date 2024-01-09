import { LightningElement } from 'lwc';
import CarouselImages from '@salesforce/resourceUrl/HostelBookingImages';
export default class SingleImageCarouselWrapper extends LightningElement {
    slides = [{
        image:`${CarouselImages}/CarouselImages/Single001.jpg`,
        heading:'Room 1',
        desc:'Description part here'
    },
    {
        image:`https://d36pgh4m67wnlt.cloudfront.net/listings/1758940/o_1h4otur9mccunjo17de1mi1b8e2.JPG`,
        heading:'Room 2',
        desc:'Description part here'
    },
    {
        image:`${CarouselImages}/CarouselImages/Single003.jpg`,
        heading:'Room 3',
        desc:'Description part here'
    }]
}