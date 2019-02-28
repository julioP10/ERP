import request from '../config/Request'

function listar({subject, content}) {
  return request({
    url:    '/prospecto/listar',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

function consultar(obj) {
  return request({
    url:    '/prospecto/consultar',
    method: 'POST',
    data:   obj
  });
}

function registrar(obj) {
  return request({
    url:    '/prospecto/mantenimiento',
    method: 'POST',
    data:   obj
  });
}

function actualizar({subject, content}) {
  return request({
    url:    '/message/create',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

function eliminar({subject, content}) {
  return request({
    url:    '/message/create',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

const ProspectoService = {
  listar,consultar, registrar , actualizar, eliminar
}

export default ProspectoService;