import React from 'react'
import { Card,Col } from 'react-bootstrap'




const EducationCard = ({education}) => {
  return (
    <Col md={5} sm={10} data-aos={education.style}>
    <Card className='my__card my-3'>
      <Card.Body className='gradient__class shadow-lg' style={{borderRadius:"30px"}}>
        <span className='btn  btn-success'>{education.year}</span>
        <h3 className="my-1">{education.course}</h3>
        <span className='text-info fw-bold'>{education.university}</span>
        <p className='text-primary fw-bold fs-5'>{education.gpa} GPA</p>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default EducationCard