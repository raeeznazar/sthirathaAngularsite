import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  data =[{title: 'Digital printing', comments:"Your imagination is limitless, and so are our printing capabilities. For ideas that don't fit nicely into predefined categories, we're here to help leading brand.", image:'assets/images/services/digital-printing.png' },
  {title: 'Offset printing', comments:'Expertise and Excellence in Every Service We Provide', image:'assets/images/services/offset-printing.png' },
  {title: 'ID card printing', comments:"We specialize in transforming essential documents like professional IDs, licenses, Aadhar cards, and school IDs into durable PVC cards, ensuring quality in every print", image:'assets/images/services/id-card-01.png' },
  {title: 'Graphic designing', comments:'Expertise and Excellence in Every Service We Provide', image:'assets/images/services/digital-printing.png' },
  {title: 'DTP', comments:'Bringing Your Words to Life in Malayalam and English: Expert Desktop Publishing Solutions', image:'assets/images/services/dtp.png' },
 
  {title: 'Hard binding', comments:'Crafting Durability, Preserving Quality: Expert Hard Book Binding.', image:'assets/images/services/hard-binding-01.png' },
  {title: 'Spiral and wiro binding', comments:'Crafting Durability, Preserving Quality: Expert Spiral Book Binding.', image:'assets/images/services/spiral-01.png' },
  {title: 'Lamination', comments:'Expertise and Excellence in Every Service We Provide', image:'assets/images/services/digital-printing.png' },
  {title: 'Photocopy', comments:'Provide good quality photocopies in multi colour and mono colour', image:'assets/images/services/photoCopy-01.png' },
  {title: 'Scanning and colour printing', comments:'Provide high resolution document scanning service and high quality printing', image:'assets/images/services/scanning-01.png' },
  {title: 'Pre-ink seal', comments:'Provide good quality pre ink seals', image:'assets/images/services/seal-01.png' },
  {title: 'Office stationery', comments:'Good qaulaity office suplies', image:'assets/images/services/office supples-01.png' },

  ]

}
