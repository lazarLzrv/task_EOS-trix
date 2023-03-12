import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Actions from "redux/actions/personCase";

const Sidebar = () => {
    const [toggleState, setToggleState] = useState({});
    const { setSelectedUser } = Actions();

    const selectedUser = useSelector((state) => state.personCase.selectedUser);
    const workUnits = useSelector((state) => state.personCase.workUnits);
    const cases = useSelector((state) => state.personCase.cases);

    useEffect(() => {
        if (workUnits.length > 0) {
            buildTreeController();
        }
    }, [workUnits]);

    const buildTreeController = () => {
        let tree = {};
        workUnits.forEach((bailiff) => {
            const { workUnitId, debtors } = bailiff;
            tree[workUnitId] = false;
            debtors.forEach((person) => {
                tree[person.workUnitId] = false;
            });
        });
        setToggleState(tree);
    };

    const getPersonCases = (workUnitId) => {
        const filteredCases = cases.filter((item) => item.workUnitId === workUnitId);
        return (
            <ul>
                {filteredCases.map((item) => {
                    const { workUnitId: id, package: name } = item;
                    return <li key={id + name}>{name}</li>;
                })}
            </ul>
        );
    };

    const toggleOpen = (b_id) => {
        setToggleState({
            ...toggleState,
            [b_id]: !toggleState[b_id],
        });
    };

    return (
        <aside>
            {workUnits.map((bailiff) => {
                const { bailiffName, debtors, workUnitId: b_id } = bailiff;
                return (
                    <div key={b_id} className={"list_element " + (toggleState[b_id] ? "open" : "")}>
                        <div className='name' onClick={() => toggleOpen(b_id)}>
                            <span></span>
                            <h5>{bailiffName}</h5>
                        </div>
                        <div className='list_body'>
                            {debtors.map((item) => {
                                const { workUnitId: id, name } = item;
                                return (
                                    <div
                                        key={id}
                                        className={
                                            "list_element " + (toggleState[id] ? "open" : "")
                                        }
                                    >
                                        <div className='name'>
                                            <span onClick={() => toggleOpen(id)}></span>
                                            <h6
                                                className={id === selectedUser ? "selected" : ""}
                                                onClick={() => {
                                                    setSelectedUser(id);
                                                }}
                                            >
                                                {name}
                                            </h6>
                                        </div>
                                        <div className='list_body'>{getPersonCases(id)}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </aside>
    );
};

export default Sidebar;
