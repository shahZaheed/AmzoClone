import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import DataTable from "react-data-table-component";


const Table = () => {
    const [getNominationData, setNominationData] = useState({
        courseNames: [],
        userName: "",
        loadModal: false,
        tableData: [],
        filterText_: "",
        resetPaginationToggle_: false,
        validateCourseName: false,
        validateUserName: false,
        action: {},
        nominationStatus: "",
        showTable: false,
        selectAll: false

    })
    useEffect(() => {
        console.log(getNominationData.action);

    }, [getNominationData])
    const customStyles = {

        title: {
            style: {
                fontColor: "red",
                fontWeight: "900",
            },
        },
        headCells: {
            style: {
                fontSize: "17px",
                fontWeight: "500",
                paddingLeft: "0 8px",
                marginLeft: "10px",
            },
        },
        cells: {
            style: {
                fontSize: "15px",
                paddingLeft: '0 8px',
                marginLeft: '10px',
                cursor: "pointer"
            },
        },
    };
    const handelRowClick = (row) => {
        // const nominated = getNominationData.courseNames.map((item) => {
        //     return row.enrolledCourses.courseIds.includes(parseInt(item.id))
        // });
        // const enrolled_in_all_courses = true;

        // const not_enrolled_in_all_courses = false;
        // console.log("in click", enrolled_in_all_courses, not_enrolled_in_all_courses);
        // console.log(getNominationData.action)

        if (Object.keys(getNominationData.action).includes(row.id)) {
            const updatedActions = { ...getNominationData.action }
            delete updatedActions[row.id];
            setNominationData((prevState) => {
                return {
                    ...prevState,
                    action: updatedActions
                }
            });
        }
        else {
            setNominationData((prevState) => {
                return {
                    ...prevState,
                    action: {
                        ...prevState.action,
                        [row.id]: true
                    }
                }
            });

        }

        // if (enrolled_in_all_courses) {
        //     console.log("in if");
        //     //already nominated
        //     setNominationData((prevState) => {
        //         return {
        //             ...prevState,
        //             action: false
        //         }
        //     });
        // }
        // else {
        //     //partially nominated or not nominated
        //     setNominationData((prevState) => {
        //         return {
        //             ...prevState,
        //             action: !getNominationData.action
        //         }
        //     });

        // }


        // if (getNominationData.courseNames.length === 0) {

        //     setNominationData((prevState) => {
        //         return {
        //             ...prevState,
        //             nominationStatus : "select_course",
        //             action: false
        //         }
        //     });
        // }
        // else {
        //     // for partially nominated and not nominated
        //     setNominationData((prevState) => {
        //         return {
        //             ...prevState,
        //             nominationStatus : "",
        //             action: !getNominationData.action
        //         }
        //     });
        // }




    }
    const handlerSelectAll = (row) => {
        console.log("Select all")
        // setNominationData((prevState)=>{
        //     return{
        //         ...prevState,
        //         selectAll : !getNominationData.selectAll,
        //     }
        // })
    }
    // const selectAllCheckBox = ()=>{
    //     return (
    //         <input onClick={handlerSelectAll} type='checkbox' name='selectAll'/>
    //     )
    // }

    const columns = [
        {
            name: "Employee ID",
            selector: (row) => `${row.id}`,
            sortable: true,
            wrap: true,

        },
        {
            name: "Name",
            selector: (row) => `${row.fullName}`,
            sortable: true,
            wrap: true,
        },
        {
            name: "Center",
            selector: (row) => row.centre,
            wrap: true,
            sortable: true,
        },
        {
            name: "Email Id",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => getStatus(row)

        },
        {
            name: "Action",
            wrap: true,
            cell: (row) => (
                <div>
                    {/* {getNominationData.action ?
                        <span className='text-success font-weight-bold'><i class="fa fa-check" aria-hidden="true" style={{ fontSize: "25px" }}></i></span>
                        :
                        getNominationData.courseNames.length === 0 && <span className='text-danger font-weight-bold text-uppercase'>select course</span>
                    } */}

                    {
                        getNominationData.selectAll && <span > &#10004;</span>
                    }
                    {
                        !getNominationData.selectAll && getNominationData.action[row.id] && <span > &#10004;</span>
                    }
                </div>
            ),
            header: <div onClick={handlerSelectAll}>Click Me</div>,
        },
    ];
    const getStatus = (row) => {
        // console.log("row", row.enrolledCourses.courseIds.includes(85));
        // let courseNames;
        // const nominated = getNominationData.courseNames.map((item) => {
        //     // console.log("each item",parseInt(item.id));
        //     courseNames = row.enrolledCourses.courseNames;
        //     return row.enrolledCourses.courseIds.includes(parseInt(item.id))

        // });
        // console.log("nominated", nominated);


        const enrolled_in_all_courses = false;

        const not_enrolled_in_all_courses = true

        // return !enrolled_in_all_courses ? !not_enrolled_in_all_courses ? "Not Nominated" : "Partially Nominated" : "Already Nominated"
        if (getNominationData.courseNames.length === 0) {
            return <small className='text-danger font-weight-bold text-uppercase'>Select course</small>;
        }
        return enrolled_in_all_courses ? <small className='text-success font-weight-bold text-uppercase'>Already Nominated</small> : not_enrolled_in_all_courses ? <small className='text-uppercase text-danger font-weight-bold'>Not Nominated</small> : <><small className='text-uppercase text-info font-weight-bold'>Partially Nominated</small><br /><small>core java</small></>;


        // return nominated.some((status) => status) ? "Enrolled" : "Not Enrolled";
    };
    const filteredItems = [
        {
            id: "1",
            fullName: "zaheeed Shah",
            centre: "Hy",
            email: "zaheeds@cdac.in",

        },
        {
            id: "2",
            fullName: "zaheeed Shah",
            centre: "Tm",
            email: "zaheeds@cdac.in",

        },
        {
            id: "3",
            fullName: "Minhaj uddin",
            centre: "Kl",
            email: "Minhaj@cdac.in",

        },
        {
            id: "4",
            fullName: "Asif ",
            centre: "Hy",
            email: "asif@cdac.in",

        },
        {
            id: "5",
            fullName: "Naveen ",
            centre: "PN",
            email: "Naveen@cdac.in",

        }
    ];

    return (
        <div className='product'>


            <sapn>{Object.keys(getNominationData.action).length} Employees are selected for nimation</sapn>


            <DataTable

                columns={columns}
                data={filteredItems}
                defaultSortField="Name"
                defaultSortAsc={true}
                striped
                pagination
                highlightOnHover
                customStyles={customStyles}
                subHeader

                // subHeaderComponent={subHeaderComponent}
                onRowClicked={handelRowClick}
            />

        </div>


    )
}

export default Table
