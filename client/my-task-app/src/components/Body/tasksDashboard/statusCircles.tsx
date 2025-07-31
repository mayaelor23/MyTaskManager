    import React, { useEffect, useState } from "react";
    import { fetchStatusCount } from "../../../services/tasksApi";
    import "./StatusCircles.css";
    

    interface StatusCounts {
    open: number;
    inProgress: number;
    done: number;
    }

    const StatusCircles: React.FC = () => {
    const [statusCounts, setStatusCounts] = useState<StatusCounts>({
        open: 0,
        inProgress: 0,
        done: 0,
    });

     useEffect(() => {
    const getStatusCounts = async () => {
      try {
        const openCount = await fetchStatusCount("open");
        const inProgressCount = await fetchStatusCount("in Progress");
        const doneCount = await fetchStatusCount("done");

        setStatusCounts({
          open: openCount,
          inProgress: inProgressCount,
          done: doneCount,
        });
      } catch (error) {
        console.error("error in count status task", error);
      }
    };

    getStatusCounts();
  }, []);

  return (
    <div className="status-circles-container">
      <div className="circle open">
        <p>Open</p>
        <span>{statusCounts.open}</span>
      </div>
      <div className="circle in-progress">
        <p>In Progress</p>
        <span>{statusCounts.inProgress}</span>
      </div>
      <div className="circle done">
        <p>Done</p>
        <span>{statusCounts.done}</span>
      </div>
    </div>
  );
};

export default StatusCircles;