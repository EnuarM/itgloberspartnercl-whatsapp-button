import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string // Whatsapp.png
  phone: string // 3507064545
  message: string // Estas comunicandote con vtex, por favor ingresa tu duda
  width: number
  height: number
}

const WhatsappButton = ({ logo, phone, message, width, height }: Props) => {
  const formatMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formatMessage}`}
          target="blank"
          rel="noreferrer noopener"
        >
          <img src={logo} width={width} height={height} alt="logo whatsapp" />
        </a>
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'WhatsApp Logo',
  phone: '3004507575',
  message: 'Estas comunicandote con vtex, por favor ingresa tu duda',
  width: 80,
  height: 80,
}

WhatsappButton.schema = {
  title: 'Boton de WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de Whatsapp que se relacione con la marca',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Telefono',
      description: 'Agrega por favor el numero de telefono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor el mensaje que se vera para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Width',
      description: 'Ancho de la imagen del logo',
      type: 'number',
    },
    height: {
      title: 'Height',
      description: 'Alto de la imagen del logo',
      type: 'number',
    },
  },
}

export default WhatsappButton
