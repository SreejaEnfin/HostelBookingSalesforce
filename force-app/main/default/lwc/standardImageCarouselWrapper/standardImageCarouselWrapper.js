import { LightningElement } from 'lwc';
import CarouselImages from '@salesforce/resourceUrl/HostelBookingImages';
export default class StandardImageCarouselWrapper extends LightningElement {
    slides = [{
        image:`https://yambihotel.com/wp-content/uploads/2015/08/20210420_102450.jpg`,
        heading:'Room 1',
        desc:'Description part here'
    },
    {
        image:`https://d36pgh4m67wnlt.cloudfront.net/listings/1894896/o_1hjaqn2u31m441uf91o291fous8t5.JPG`,
        heading:'Room 2',
        desc:'Description part here'
    },
    {
        image:`${CarouselImages}/CarouselImages/Standard003.jpg`,
        heading:'Room 3',
        desc:'Description part here'
    }]
}