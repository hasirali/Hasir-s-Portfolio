import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@material-ui/icons/School';

const Education = () => {
  return (
    <div className='Education'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2020-2024' iconStyle={{background:'#3e497a' , color:'#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>United College of Engineering and Research Prayagraj, India </h3>
          <p>Bachelor of Technology </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2019-2020' iconStyle={{background:'#3e497a' , color:'#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>Delhi Public School Prayagraj, Uttar Pradesh  </h3>
          <p>Intermediate</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date='2017-2018' iconStyle={{background:'#3e497a' , color:'#fff'}}
        icon={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'> Delhi Public School Prayagraj, Uttar Pradesh</h3>
          <p>Highschool</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Education