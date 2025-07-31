    import React from "react"

    interface ItitleWithDateProps {
      title?: string;
      dateOfToday?: Date;
    }

    const TitleWithDateComponent: React.FC<ItitleWithDateProps> = ({ title, dateOfToday }) => {
    return (
        <div>
        <h1>{title}</h1>
              <h2>{dateOfToday?.toLocaleDateString('he-IL')}</h2>
        </div>
    );
    };

    export default TitleWithDateComponent;