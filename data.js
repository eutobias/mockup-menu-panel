const data = [
  {
    label: 'Masculino',
    link: '#LINK',
    image: '#URL',
    image_title: 'Título que fica sobre a imagem',
    image_description: 'Texto curto que vem após o título',
    buttons_1_label: 'Ver mais adulto >',
    buttons_1_link: '#link',
    buttons_2_label: 'Ver mais infantil >',
    buttons_2_link: '#link',
    children: [
      {
        label: 'Camisetas',
        link: '#LINK',
        column: 1,
        line: 1,
        bold: false,
        italic: true,
        color: '#f00',
        text_decoration: 'underline'
      },
      {
        label: 'Camisas',
        link: '#LINK',
        column: 1,
        line: 2,
        bold: false,
        italic: true,
        color: '',
        text_decoration: 'line-through'
      },
      {
        label: 'Bermudas',
        link: '#LINK',
        column: 2,
        line: 1,
        bold: false,
        italic: true,
        color: 'blue',
        text_decoration: 'none'
      }
    ]
  }, 
  {
    label: 'Infantil',
    link: '#LINK',
    image: '#URL',
    image_title: 'Título que fica sobre a imagem',
    image_description: 'Texto curto que vem após o título',
    buttons_1_label: 'Ver mais adulto >',
    buttons_1_link: '#link',
    buttons_2_label: 'Ver mais infantil >',
    buttons_2_link: '#link',
    children: [
      {
        label: 'Camisetas',
        link: '#LINK',
        column: 1,
        line: 1,
        bold: false,
        italic: true,
        color: '#f00',
        text_decoration: 'underline'
      },
      {
        label: 'Camisas',
        link: '#LINK',
        column: 1,
        line: 2,
        bold: false,
        italic: true,
        color: '',
        text_decoration: 'line-through'
      },
      {
        label: 'Bermudas',
        link: '#LINK',
        column: 2,
        line: 1,
        bold: false,
        italic: true,
        color: 'blue',
        text_decoration: 'none'
      }
    ]
  }
]

export default data
