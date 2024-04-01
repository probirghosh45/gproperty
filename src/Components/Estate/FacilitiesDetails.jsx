/* eslint-disable react/prop-types */
const FacilitiesDetails = ({ Facility }) => {
    if (!Facility || Object.keys(Facility).length === 0) {
        return null; 
    }

    return (
        <>
            {Facility.pool && <li>Pool : {Facility.pool}</li>}
            {Facility.BedRoom && <li>BedRoom : {Facility.BedRoom}</li>}
            {Facility.livingRoom && <li>LivingRoom : {Facility.livingRoom}</li>}
        </>
    );
};

export default FacilitiesDetails;
